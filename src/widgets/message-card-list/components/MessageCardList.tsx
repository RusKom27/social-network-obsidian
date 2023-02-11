import React, {FC} from 'react';

import {messageApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {useParams} from "react-router-dom";
import {MessageCard} from "../../../entities/message";


interface PropsType {
}

const MessageCardList: FC<PropsType> = () => {
    const {dialog_id} = useParams()
    if (!dialog_id) return <Loader/>
    const {data: messagesList} = messageApi.useFetchMessagesQuery(dialog_id)

    if (!messagesList) return <Loader/>

    return (
        <ComponentList borders={"none"}>
            {messagesList.map(message =>
                <MessageCard message={message} key={message._id}/>
            )}
        </ComponentList>
    );
}

export default MessageCardList;

