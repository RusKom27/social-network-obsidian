import React, {FC, useEffect, useRef} from 'react';

import styles from "./PostCard.module.scss"
import {IPost} from "../../../../../shared/api/models";
import {LikePostButton} from "../../../../../features";
import {UserAvatar, UserLink, UserLogin, UserName} from "../../../../user";
import {Icon} from "../../../../../shared/ui";

interface PropsType {
    post: IPost
}

const PostCard: FC<PropsType> = ({post}) => {
    const textRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerHTML = post.text.replace(/\n\r?/g, '<br />')
        }
    }, [post, textRef])

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
                        <Icon type={"ThreeDots"} size={1}/>
                    </div>
                </div>
                <div ref={textRef} className={styles.content}>
                </div>
                <div className={styles.footer}>
                    <LikePostButton post_id={post._id}/>
                </div>
            </div>
        </div>
    );
}

export default PostCard;

