import React, {FC} from 'react';

import styles from "./PostCard.module.scss"
import {IPost} from "../../../shared/api/models";
import {LikePostButton} from "../../../features";


interface PropsType {
    post: IPost
}

const PostCard: FC<PropsType> = ({post}) => {
    return (
        <div className={styles.container}>
            {post.author_id}
            <LikePostButton post_id={post._id}/>
        </div>
    );
}

export default PostCard;

