import React, {useMemo} from 'react';

import {topicApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {ActualTopicCard} from "../../actual-topic-card";


const ActualTopicList = () => {
    const {data: topicList, isLoading} = topicApi.useGetTopicListQuery({sort_by_popularity: "descending"});

    const actualTopicsComponents = useMemo(() => {
        return topicList?.map(topic_id =>
            <ActualTopicCard key={topic_id} topic_id={topic_id}/>,
        );
    }, [topicList]);

    if (isLoading) return <Loader/>;

    return (
        <ComponentList>
            {actualTopicsComponents}
        </ComponentList>
    );
};

export default ActualTopicList;

