import React, {memo, useRef, useState} from 'react';

import styles from "./MessageCard.module.scss";
import {UserAvatar, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";
import {messageApi} from "../../../shared/api";
import {MessageText, MessageCreationDate} from "../../../entities/message";
import {OpenMessageOptionsButton} from "../../../features";
import {Image, Loader} from "../../../shared/ui";
import {FetchImage} from "../../../entities/image";

interface PropsType {
    message_id: string
    isFirstInGroup?: boolean
    isFromOtherUser?: boolean
}

const MessageCard = memo<PropsType>(({
    message_id,
    isFirstInGroup=false,
    isFromOtherUser=false,
}) => {
    const {data: message} = messageApi.useFetchMessageQuery(message_id);

    if (!message) return <Loader/>;

    console.log("CREATED", message.createdAt?.toString());
    console.log("UPDATE", message.updatedAt?.toString());

    return (
        <div
            className={styles.container}
            data-from-other-user={isFromOtherUser}
        >
            <div className={styles.side}>
                {isFirstInGroup && <UserAvatar size={1} user_id={message.sender_id}/>}
            </div>
            <div className={styles.main}>
                {isFirstInGroup && <div className={styles.header}>
                    <div>
                        <UserName user_id={message.sender_id}/>
                    </div>
                </div>}
                <div className={styles.content}>
                    {message.image && <Image>
                        <FetchImage src={message.image}/>
                    </Image>}
                    <MessageText message_id={message_id}/>
                    <MessageCreationDate message_id={message_id}/>
                </div>
            </div>
            <div className={styles.options}>
                <OpenMessageOptionsButton message_id={message_id}/>
            </div>
        </div>
    );
});

export default MessageCard;

