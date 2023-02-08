import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {queryWithAuth} from "../interceptors";
import {IDialog} from "../models";

export const dialogApi = createApi({
    reducerPath: "dialogAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['Dialog'],
    endpoints: (build) => ({
        fetchDialogs: build.query<IDialog[], string>({
            query: () => ({
                url: `/dialog/all`,
            }),
            providesTags: (result) => ['Dialog']
        }),
    })
})