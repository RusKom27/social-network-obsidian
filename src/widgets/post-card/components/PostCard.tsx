import React, {memo} from 'react';

import styles from "./PostCard.module.scss";
import {LikePostButton, OpenPostOptionsButton} from "../../../features";
import {UserAvatar, UserLink, UserLogin, UserName} from "../../../entities/user";
import {Loader} from "../../../shared/ui";
import {postApi} from "../../../shared/api";
import {PostText} from "../../../entities/post";

interface PropsType {
    post_id: string
}

const PostCard = memo<PropsType>(({post_id}) => {
    const {data: post} = postApi.useFetchPostQuery(post_id);

    if (!post) return <Loader/>;

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
                        <OpenPostOptionsButton post_id={post_id}/>
                    </div>
                </div>
                <div className={styles.content}>
                    <PostText post_id={post_id}/>
                </div>
                <div className={styles.footer}>
                    <LikePostButton post_id={post._id}/>
                </div>
            </div>
        </div>
    );
});

export default PostCard;

