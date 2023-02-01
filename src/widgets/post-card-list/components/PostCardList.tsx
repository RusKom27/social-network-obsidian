import React, {FC} from 'react';

import styles from "./PostCardList.module.scss"
import {PostCard} from "../../post-card";


interface PropsType {

}

const PostCardList: FC<PropsType> = () => {
    return (
        <div className={styles.container}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    );
}

export default PostCardList;

