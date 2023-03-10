import {createApi} from "@reduxjs/toolkit/dist/query/react";

import IPost from "../models/IPost";
import {queryWithAuth} from "../interceptors";
import {PostRequestQuery} from "../types";
import {IMessage} from "../models";


export const postApi = createApi({
    reducerPath: "postAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['Post', 'PostId', 'ActualTopic', 'PopularTag'],
    endpoints: (build) => ({
        fetchPost: build.query<IPost, string>({
            query: (post_id) => ({
                url: `/post/${post_id}`,
            }),
            providesTags: () => ['Post'],
        }),
        fetchAllPostIdList: build.query<string[], PostRequestQuery | undefined>({
            query: (post_request_query) => {
                if (!post_request_query) return {url: `/post`};
                const query_string = Object
                    .entries(post_request_query)
                    .map(entry => `${entry[0]}=${entry[1]}`)
                    .join("&");
                return {
                    url: `/post?${query_string}`,
                };
            },
            providesTags: () => ['PostId'],
        }),
        createPost: build.mutation<IPost, {text: string, image: string}>({
            query: (post_data) => ({
                url: `/post/create`,
                method: 'POST',
                body: {
                    ...post_data,
                },
            }),
            invalidatesTags: ['Post', 'PostId'],
        }),
        updatePost: build.mutation<IPost, any>({
            query: (post) => ({
                url: `/post/update/${post._id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: ['Post'],
        }),
        likePost: build.mutation<IPost, string>({
            query: (post_id) => ({
                url: `/post/like/${post_id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Post'],
        }),
        deletePost: build.mutation({
            query: (post_id) => ({
                url: `/post/delete/${post_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post'],
        }),
        checkPost: build.mutation({
            query: (post_id) => ({
                url: `/post/check/${post_id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Post'],
        }),
    }),
});