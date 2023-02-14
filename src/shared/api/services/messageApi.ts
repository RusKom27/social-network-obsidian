import {createApi} from "@reduxjs/toolkit/dist/query/react";

import {queryWithAuth} from "../interceptors";
import {IMessage} from "../models";

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
                url: `/message/get/${message_id}`,
            }),
            providesTags: (result) => ['Message'],
        }),
        fetchMessages: build.query<string[], string>({
            query: (dialog_id) => ({
                url: `/message/get_id_array/${dialog_id}`,
            }),
            providesTags: (result) => ['MessageIdArray'],
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