import {createApi} from "@reduxjs/toolkit/dist/query/react";

import {baseQuery} from "../interceptors";
import {ITopic} from "../models";


export const topicApi = createApi({
    reducerPath: "topicApi",
    baseQuery: baseQuery,
    tagTypes: ['Topic', 'TopicList'],
    endpoints: (build) => ({
        getTopic: build.query<ITopic, string>({
            query: (topic_id) => ({
                url: `/topic/${topic_id}`,
            }),
            providesTags: () => ['Topic'],
        }),
        getTopicList: build.query<string[], string>({
            query: (user_input) => {
                if (!user_input) return { url: `/topic`};
                else return { url: `/topic?text=${user_input.trim()}`};
            },
            providesTags: () => ['TopicList'],
        }),
    }),
});