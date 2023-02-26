import {createApi} from "@reduxjs/toolkit/dist/query/react";

import {queryWithAuth} from "../interceptors";
import {IMessage} from "../models";
import {MessageRequestQuery} from "../types";

interface MessageCreationProps {
    text?: string
    image?: string
    dialog_id: string
}

export const messageApi = createApi({
    reducerPath: "messageAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['MessageIdArray', 'Message'],
    endpoints: (build) => ({
        fetchMessage: build.query<IMessage, string>({
            query: (message_id) => ({
                url: `/message/${message_id}`,
            }),
            providesTags: (result) => ['Message'],
        }),
        fetchMessages: build.query<IMessage[], {dialog_id: string, query?: MessageRequestQuery}>({
            query: ({dialog_id, query}) => {
                if (!query) return {url: `/message/dialog`};
                const query_string = Object
                    .entries(query)
                    .map(entry => `${entry[0]}=${entry[1]}`)
                    .join("&");
                return {
                    url: `/message/dialog/${dialog_id}?${query_string}`,
                };
            },
            providesTags: (result) => ['Message'],
        }),
        createMessage: build.mutation<IMessage, MessageCreationProps>({
            query: (message) => ({
                url: `/message/create`,
                method: 'POST',
                body: {
                    ...message,
                },
            }),
            invalidatesTags: ['Message'],
        }),
        deleteMessage: build.mutation<IMessage, string>({
            query: (message_id) => ({
                url: `/message/delete/${message_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Message'],
        }),
    }),
});