import React, {FC, memo, useContext, useEffect, useRef, useState} from 'react';

import styles from "./MessageCard.module.scss"
import {UserAvatar, UserLogin, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";
import {Button, Icon, Loader} from "../../../shared/ui";
import {messageApi} from "../../../shared/api";
import {MessageText} from "../../../entities/message";
import {HoverCardContext} from "../../../shared/lib/contexts";
import {DeleteMessageButton, LogoutButton} from "../../../features";


interface PropsType {
    message_id: string
}

const MessageCard = memo<PropsType>(({message_id}) => {
    const {data: message} = messageApi.useFetchMessageQuery(message_id)
    const [isFirstInGroup, setIsFirstInGroup] = useState(true)
    const user_id = useAppSelector(state => state.auth.user_id)
    const from_other_user = user_id !== message?.sender_id
    const ref = useRef<HTMLDivElement>(null)
    const optionRef = useRef<HTMLDivElement>(null)
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext)

    const onClickHandler = () => {
        openHoverCard({
            children: <>
                <DeleteMessageButton size={1} border={false} onSubmit={() => closeHoverCard()} message_id={message_id}/>
            </>,
            targetElement: optionRef.current,
            position: "absolute",
            align: "same",
        })
    }


    useEffect(() => {
        if (ref.current && ref.current.previousElementSibling) {
            setIsFirstInGroup(ref.current.previousElementSibling.attributes.item(1)?.value !== from_other_user.toString())
        }
    }, [ref, message, from_other_user])

    return (
        <div
            ref={ref}
            className={styles.container}
            data-from-other-user={from_other_user}
        >
            <div className={styles.side}>
                {isFirstInGroup && <UserAvatar size={1} user_id={message?.sender_id}/>}
            </div>
            <div className={styles.main}>
                {isFirstInGroup && <div className={styles.header}>
                    <div>
                        <UserName user_id={message?.sender_id}/>
                    </div>
                </div>}
                <div className={styles.content}>
                    <MessageText message_id={message_id}/>
                </div>
            </div>
            <div ref={optionRef} className={styles.options}>
                <Button onClick={onClickHandler} size={0}>
                    <Icon type={"ThreeDots"} size={1}/>
                </Button>
            </div>
        </div>
    );
})

export default MessageCard;
