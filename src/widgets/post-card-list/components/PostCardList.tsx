import React, {FC} from 'react';

import styles from "./PostCardList.module.scss"
import {PostCard} from "../../post-card";
import {postApi} from "../../../shared/api";


interface PropsType {
    query?: string
}

const PostCardList: FC<PropsType> = ({query}) => {
    const {data: postList, isLoading} = !query ?
        postApi.useFetchAllPostListQuery("") :
        postApi.useFetchPostListByUserLoginQuery(query)

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

