import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {queryWithAuth} from "../interceptors";
import {IMessage} from "../models";

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
    })
})