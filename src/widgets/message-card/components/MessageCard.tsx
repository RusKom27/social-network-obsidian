
import React, {memo, useEffect, useRef, useState} from 'react';

import styles from "./MessageCard.module.scss";
import {UserAvatar, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";
import {messageApi} from "../../../shared/api";
import {MessageText} from "../../../entities/message";
import {OpenMessageOptionsButton} from "../../../features";
import {Image, Loader} from "../../../shared/ui";
import {FetchImage} from "../../../entities/image";


interface PropsType {
    message_id: string
}

const MessageCard = memo<PropsType>(({message_id}) => {
    const {data: message} = messageApi.useFetchMessageQuery(message_id);
    const [isFirstInGroup, setIsFirstInGroup] = useState(false);
    const user_id = useAppSelector(state => state.auth.user_id);
    const from_other_user = user_id !== message?.sender_id;
    const ref = useRef<HTMLDivElement>(null);

    const previousSiblingIsFromOtherUser = ref.current?.previousElementSibling?.attributes.item(1)?.value;

    useEffect(() => {
        if (previousSiblingIsFromOtherUser) {
            setIsFirstInGroup(
                previousSiblingIsFromOtherUser !== from_other_user.toString(),
            );
        }
    }, [previousSiblingIsFromOtherUser, message, from_other_user]);

    if (!message) return <Loader/>;

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
                <div className={styles.content}>
                    {message.image && <Image>
                        <FetchImage src={message.image}/>
                    </Image>}
                    <MessageText message_id={message_id}/>
                </div>
            </div>
            <div className={styles.options}>
                <OpenMessageOptionsButton message_id={message_id}/>
            </div>
        </div>
    );
});

export default MessageCard;

