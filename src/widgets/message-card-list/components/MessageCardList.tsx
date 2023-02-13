import React, {FC, useEffect, useMemo} from 'react';

import {messageApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {useParams} from "react-router-dom";
import {MessageCard} from "../../message-card";

interface PropsType {
}

const MessageCardList: FC<PropsType> = () => {
    const {dialog_id} = useParams()
    const {data: messageIdArray, isLoading} = messageApi.useFetchMessagesQuery(dialog_id || "", {
        pollingInterval: 1000,
    })

    useEffect(() => {
        window.scrollTo({
            top: 9999,
            behavior: "smooth"
        })
    }, [dialog_id])

    const messageComponents = useMemo(() => {
        return messageIdArray?.map(message_id =>
            <MessageCard message_id={message_id} key={message_id}/>
        )
    }, [messageIdArray])

    if (isLoading) return <Loader/>

    return (
        <ComponentList borders={"none"}>
            {messageComponents}
        </ComponentList>
    );
}

export default MessageCardList;

