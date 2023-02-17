import React, {useMemo} from 'react';

import {postApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {ActualTopicCard} from "../../actual-topic-card";


const ActualTopicList = () => {
    const {data: actualTopicList, isLoading} = postApi.useFetchActualTopicListQuery("");
    const actualTopicsComponents = useMemo(() => {
        return actualTopicList?.map(actualTopic =>
            <ActualTopicCard key={actualTopic.value} actualTopic={actualTopic}/>,
        );
    }, [actualTopicList]);

    if (isLoading) return <Loader/>;

    return (
        <ComponentList>
            {actualTopicsComponents}
        </ComponentList>
    );
};

export default ActualTopicList;

