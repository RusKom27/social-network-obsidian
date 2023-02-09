import React, {FC} from 'react';

import styles from "./PostCard.module.scss"
import {IPost} from "../../../../../shared/api/models";
import {LikePostButton} from "../../../../../features";
import {UserAvatar, UserLink, UserLogin, UserName} from "../../../../user";

interface PropsType {
    post: IPost
}

const PostCard: FC<PropsType> = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <UserLink user_id={post.author_id}>
                    <UserAvatar size={1} user_id={post.author_id}/>
                </UserLink>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div>
                        <UserLink user_id={post.author_id}>
                            <UserName user_id={post.author_id}/>
                            <UserLogin user_id={post.author_id}/>
                        </UserLink>
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

export default PostCard;

