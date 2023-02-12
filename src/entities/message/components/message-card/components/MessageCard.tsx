import React, {FC, useEffect, useRef, useState} from 'react';

import styles from "./MessageCard.module.scss"
import {IMessage} from "../../../../../shared/api/models";
import {UserAvatar, UserLogin, UserName} from "../../../../user";
import {useAppSelector} from "../../../../../shared/hooks";
import {Icon} from "../../../../../shared/ui";


interface PropsType {
    message: IMessage
}

const MessageCard: FC<PropsType> = ({message}) => {
    const [isFirstInGroup, setIsFirstInGroup] = useState(true)
    const user_id = useAppSelector(state => state.auth.user_id)
    const from_other_user = user_id !== message.sender_id

    const ref = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerHTML = message.text.replace(/\n\r?/g, '<br />')
        }
    }, [message, textRef])

    useEffect(() => {
        if (ref.current && ref.current.previousElementSibling) {
            setIsFirstInGroup(ref.current.previousElementSibling.attributes.item(1)?.value !== from_other_user.toString())
        }
    }, [ref])

    return (
        <div
            ref={ref}
            className={styles.container}
            data-from-other-user={from_other_user}
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
                <div ref={textRef} className={styles.content}>
                </div>
            </div>
            <div className={styles.options}>
                <Icon type={"ThreeDots"} size={1}/>
            </div>
        </div>
    );
}

export default MessageCard;

