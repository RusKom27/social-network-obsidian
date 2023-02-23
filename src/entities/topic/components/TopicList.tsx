import React, {FC} from 'react';

import {topicApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {TopicRequestQuery} from "../../../shared/api/types";
import {ActualTopicCard} from "../../../widgets";


export const TopicList: FC<TopicRequestQuery> = ({
    name="",
    sort_by_popularity="ascending",
}) => {
    const {data: topics} = topicApi.useGetTopicListQuery({
        name, sort_by_popularity,
    });

    if (!topics) return <Loader />;

    return (
        <ComponentList>
            {topics.map(topic_id =>
                <ActualTopicCard key={topic_id} topic_id={topic_id}/>,
            )}

        </ComponentList>
    );
};