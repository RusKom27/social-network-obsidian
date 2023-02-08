import React, {FC} from 'react';

import styles from "./MessageCard.module.scss"
import {IPost} from "../../../shared/api/models";
import {LikePostButton} from "../../../features";
import {UserAvatar, UserLogin, UserName} from "../../../entities/user";


interface PropsType {
    post: IPost
}

const MessageCard: FC<PropsType> = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <UserAvatar size={1} user_id={post.author_id}/>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div>
                        <UserName user_id={post.author_id}/>
                        <UserLogin user_id={post.author_id}/>
                    </div>
                    <div>
                        Options
                    </div>
                </div>
                <div className={styles.content}>
                    {post.text}
                </div>
                <div className={styles.footer}>
                    <LikePostButton post_id={post._id}/>
                </div>
            </div>
        </div>
    );
}

export default MessageCard;

