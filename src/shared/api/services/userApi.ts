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
                url: `/user/id/${user_id}`,
            }),
            providesTags: () => ['User'],
        }),
        fetchUserListById: build.query<IUser[], string[]>({
            query: (users_id) => ({
                url: `/user/id_array?users_id=${users_id.join('&users_id=')}`,
            }),
            providesTags: () => ['UserList'],
        }),
        fetchUserListByQuery: build.query<IUser, UserRequestQuery | undefined>({
            query: (post_request_query) => {
                if (!post_request_query) return {url: `/user`};
                const query_string = Object
                    .entries(post_request_query)
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