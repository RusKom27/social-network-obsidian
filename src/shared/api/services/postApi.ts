import {createApi} from "@reduxjs/toolkit/dist/query/react";

import IPost from "../models/IPost";
import {queryWithAuth} from "../interceptors";

export const postApi = createApi({
    reducerPath: "postAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['Post', 'PostId', 'ActualTopic', 'PopularTag'],
    endpoints: (build) => ({
        fetchPost: build.query<IPost, string>({
            query: (post_id) => ({
                url: `/post/id/${post_id}`,
            }),
            providesTags: () => ['Post'],
        }),
        fetchAllPostIdList: build.query<string[], string>({
            query: () => ({
                url: `/post/all`,
            }),
            providesTags: () => ['PostId'],
        }),
        fetchPostIdListByUserLogin: build.query<string[], string>({
            query: (user_login) => ({
                url: `/post/user_login/${user_login}`,
            }),
            providesTags: () => ['PostId'],
        }),
        fetchActualTopicList: build.query({
            query: () => ({
                url: `/post/actual_topics`,
            }),
            providesTags: () => ['ActualTopic'],
        }),
        fetchPopularTagList: build.query({
            query: () => ({
                url: `/post/popular_tags`,
            }),
            providesTags: () => ['PopularTag'],
        }),
        createPost: build.mutation<IPost, string>({
            query: (post_text) => ({
                url: `/post/create`,
                method: 'POST',
                body: {
                    text: post_text,
                },
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