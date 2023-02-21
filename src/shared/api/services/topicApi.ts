import {createApi} from "@reduxjs/toolkit/dist/query/react";

import {baseQuery} from "../interceptors";
import {ITopic} from "../models";
import {TopicRequestQuery} from "../types";


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
        getTopicList: build.query<string[], TopicRequestQuery | string>({
            query: (topic_request_query) => {
                if (!topic_request_query) return {url: `/topic`};
                const query_string = Object
                    .entries(topic_request_query)
                    .map(entry => `${entry[0]}=${entry[1]}`)
                    .join("&");
                return {
                    url: `/topic?${query_string}`,
                };
            },
            providesTags: () => ['TopicList'],
        }),
    }),
});