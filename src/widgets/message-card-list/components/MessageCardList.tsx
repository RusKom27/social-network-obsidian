import React, {FC, useEffect, useMemo} from 'react';

import {messageApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {useParams} from "react-router-dom";
import {MessageCard} from "../../../entities/message";


interface PropsType {
}

const MessageCardList: FC<PropsType> = () => {
    const {dialog_id} = useParams()
    const {data: messagesList, isLoading} = messageApi.useFetchMessagesQuery(dialog_id || "", {
        pollingInterval: 1000,
    })


    useEffect(() => {
        window.scrollTo({
            top: 9999,
            behavior: "smooth"
        })
    }, [dialog_id])

    const messageComponents = useMemo(() => {
        return messagesList?.map(message =>
            <MessageCard message={message} key={message._id}/>
        )
    }, [messagesList])

    if (isLoading) return <Loader/>

    return (
        <ComponentList borders={"none"}>
            {messageComponents}
        </ComponentList>
    );
}

export default MessageCardList;

