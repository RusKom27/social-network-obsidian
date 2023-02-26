
import {useParams} from "react-router-dom";
import React, {ReactNode, useEffect, useMemo} from 'react';
import moment from "moment";

import {messageApi} from "../../../shared/api";
import {ComponentList, Loader, MessageGroupDate} from "../../../shared/ui";
import {MessageCard} from "../../message-card";
import {useFetchMessages} from "../hooks/useFetchMessages";
import {IMessage} from "../../../shared/api/models";
import {useAppSelector} from "../../../shared/hooks";

const MessageCardList = () => {
    const {dialog_id} = useParams();
    const user_id = useAppSelector(state => state.auth.user_id);
    const {data: messages, isLoading} = messageApi.useFetchMessagesQuery(
        {dialog_id: dialog_id || "", query: {sort_by_relevance: "ascending", limit: 50}},
        {pollingInterval: 1000},
    );

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, [dialog_id]);

    const messageGroups: ReactNode[] = useMemo(() => {
        if (!messages) return [];
        const result: ReactNode[] = [];
        let last_message_date: moment.Moment | null = null;
        let isFirstInGroup = true;
        let isFromOtherUser = false;

        messages.forEach(message => {
            if (!last_message_date || last_message_date.dayOfYear() !== moment(message.createdAt).dayOfYear()) {
                last_message_date = moment(message.createdAt);
                result.push(<MessageGroupDate date={last_message_date}/>);
                isFirstInGroup = true;
            }
            if (isFromOtherUser !== (user_id !== message.sender_id)) isFirstInGroup = true;
            isFromOtherUser = user_id !== message.sender_id;

            result.push(<MessageCard
                message_id={message._id}
                isFirstInGroup={isFirstInGroup}
                isFromOtherUser={isFromOtherUser}
                key={message._id}
            />);
            isFirstInGroup = false;
        });
        return result.reverse();
    }, [messages]);

    if (isLoading) return <Loader/>;


    return (
        <ComponentList reverse={true} borders={"none"}>
            {messageGroups}
        </ComponentList>
    );
};

export default MessageCardList;

