import {createApi} from "@reduxjs/toolkit/dist/query/react";
import IPost from "../models/IPost";
import {queryWithAuth} from "../interceptors";

export const postApi = createApi({
    reducerPath: "postAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['Post', 'PostList', 'ActualTopicList', 'PopularTagList'],
    endpoints: (build) => ({
        fetchPostById: build.query<IPost, string>({
            query: (post_id) => ({
                url: `/post/id/${post_id}`
            }),
            providesTags: (result) => ['Post']
        }),
        fetchAllPostList: build.query<IPost[], string>({
            query: () => ({
                url: `/post/all`
            }),
            providesTags: (result) => ['PostList']
        }),
        fetchPostListByUserLogin: build.query<IPost[], string>({
            query: (user_login) => ({
                url: `/post/user_login/${user_login}`
            }),
            providesTags: (result) => ['PostList']
        }),
        fetchActualTopicList: build.query({
            query: () => ({
                url: `/post/actual_topics`
            }),
            providesTags: (result) => ['ActualTopicList']
        }),
        fetchPopularTagList: build.query({
            query: (user_login) => ({
                url: `/post/popular_tags`
            }),
            providesTags: (result) => ['PopularTagList']
        }),
        createPost: build.mutation<IPost, string>({
            query: (post_text) => ({
                url: `/post/create`,
                method: 'POST',
                body: {
                    text: post_text
                }
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        likePost: build.mutation<IPost, string>({
            query: (post_id) => ({
                url: `/post/like/${post_id}`,
                method: 'PUT'
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        removePost: build.mutation({
            query: (post_id) => ({
                url: `/post/delete/${post_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        checkPost: build.mutation({
            query: (post_id) => ({
                url: `/post/check/${post_id}`,
                method: 'PUT'
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
    })
})