
import {useParams} from "react-router-dom";
import React, {useEffect, useMemo} from 'react';

import {messageApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {MessageCard} from "../../message-card";

const MessageCardList = () => {
    const {dialog_id} = useParams();
    const {data: messageIdArray, isLoading} = messageApi.useFetchMessagesQuery(
        {dialog_id: dialog_id || "", query: {sort_by_relevance: "descending", limit: 50}},
        {pollingInterval: 1000},
    );

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, [dialog_id]);

    const messageComponents = useMemo(() => {
        return messageIdArray?.map(message_id =>
            <MessageCard message_id={message_id} key={message_id}/>,
        );
    }, [messageIdArray]);

    if (isLoading) return <Loader/>;

    return (
        <ComponentList reverse={true} borders={"none"}>
            {messageComponents}
        </ComponentList>
    );
};

export default MessageCardList;

