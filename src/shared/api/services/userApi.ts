import {createApi} from "@reduxjs/toolkit/dist/query/react";

import {queryWithAuth} from "../interceptors";
import {IUser} from "../models";
import {UserRequestQuery} from "../types";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['User', 'UserList'],
    endpoints: (build) => ({
        fetchUserById: build.query<IUser, string | null>({
            query: (user_id) => ({
                url: `/user/${user_id}`,
            }),
            providesTags: () => ['User'],
        }),
        fetchUserList: build.query<string[], UserRequestQuery | undefined>({
            query: (user_request_query) => {
                if (!user_request_query) return {url: `/user`};
                const query_string = Object
                    .entries(user_request_query)
                    .map(entry => `${entry[0]}=${entry[1]}`)
                    .join("&");
                return {
                    url: `/user?${query_string}`,
                };
            },
            providesTags: () => ['UserList'],
        }),
        updateUser: build.mutation<IUser, any>({
            query: (props) => ({
                url: `/user/update`,
                method: 'POST',
                body: {
                    ...props,
                },
            }),
            invalidatesTags: ['User'],
        }),
        followUser: build.mutation<IUser, string>({
            query: (user_id) => ({
                url: `/user/subscribe/${user_id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});