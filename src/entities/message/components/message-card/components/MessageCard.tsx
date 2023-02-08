import React, {FC} from 'react';

import styles from "./MessageCard.module.scss"
import {IMessage} from "../../../../../shared/api/models";
import {UserAvatar, UserLogin, UserName} from "../../../../user";


interface PropsType {
    message: IMessage
}

const MessageCard: FC<PropsType> = ({message}) => {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <UserAvatar size={1} user_id={message.sender_id}/>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div>
                        <UserName user_id={message.sender_id}/>
                        <UserLogin user_id={message.sender_id}/>
                    </div>
                    <div>
                        Options
                    </div>
                </div>
                <div className={styles.content}>
                    {message.text}
                </div>
            </div>
        </div>
    );
}

export default MessageCard;

