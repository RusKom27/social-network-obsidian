import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {queryWithAuth} from "../interceptors";
import {IDialog, IUser} from "../models";

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
        openDialog: build.mutation<IDialog, string[]>({
            query: (props) => ({
                url: `/dialog/create`,
                method: 'POST',
                body: {
                    members_id: props
                }
            }),
            invalidatesTags: ['Dialog']
        })
    })
})