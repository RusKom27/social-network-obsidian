import React, {FC} from 'react';

import styles from "./PostCard.module.scss"
import {IPost} from "../../../shared/api/models";
import {LikePostButton} from "../../../features";
import {UserAvatar} from "../../../entities/user";


interface PropsType {
    post: IPost
}

const PostCard: FC<PropsType> = ({post}) => {
    return (
        <div className={styles.container}>
            <UserAvatar />
            <LikePostButton post_id={post._id}/>
        </div>
    );
}

export default PostCard;

