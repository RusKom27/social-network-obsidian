import React, {FC} from 'react';

import styles from "./PostCardList.module.scss"
import {PostCard} from "../../post-card";
import {postApi} from "../../../shared/api";


interface PropsType {

}

const PostCardList: FC<PropsType> = () => {
    const {data: postList, isLoading} = postApi.useFetchAllPostListQuery("")

    if (isLoading || !postList) return <div>Loading</div>

    return (
        <div className={styles.container}>
            {postList.map(post =>
                <PostCard post={post} key={post._id}/>
            )}
        </div>
    );
}

export default PostCardList;

