import React, {FC} from 'react';

import styles from "./MessageCard.module.scss"
import {IMessage} from "../../../../../shared/api/models";
import {UserAvatar, UserLogin, UserName} from "../../../../user";
import {useAppSelector} from "../../../../../shared/hooks";
import {Icon} from "../../../../../shared/ui";


interface PropsType {
    message: IMessage
}

const MessageCard: FC<PropsType> = ({message}) => {
    const user_id = useAppSelector(state => state.auth.user_id)
    const from_other_user = user_id !== message.sender_id

    return (
        <div
            className={styles.container}
            data-from-other-user={from_other_user}
        >
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
                        <Icon type={"ThreeDots"} size={1}/>
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

