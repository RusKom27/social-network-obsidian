import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {queryWithAuth} from "../interceptors";
import {IDialog, IMessage} from "../models";

interface MessageCreationProps {
    text?: string
    image?: string
    dialog_id: string
}

export const messageApi = createApi({
    reducerPath: "messageAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['Message'],
    endpoints: (build) => ({
        fetchMessages: build.query<IMessage[], string>({
            query: (dialog_id) => ({
                url: `/message/get/${dialog_id}`,
            }),
            providesTags: (result) => ['Message']
        }),
        createMessage: build.mutation<IMessage, MessageCreationProps>({
            query: (message) => ({
                url: `/message/create`,
                method: 'POST',
                body: {
                    ...message
                }
            }),
            invalidatesTags: ['Message']
        })
    })
})