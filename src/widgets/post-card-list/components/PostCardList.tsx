import React, {FC, useMemo} from 'react';

import {PostCard} from "../../../entities/post";
import {postApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";


interface PropsType {
    query?: string
}

const PostCardList: FC<PropsType> = ({query}) => {
    const {data: postList, isLoading} = !query ?
        postApi.useFetchAllPostListQuery("") :
        postApi.useFetchPostListByUserLoginQuery(query)

    const postComponents = useMemo(() => {
        return postList?.map(post =>
            <PostCard post={post} key={post._id}/>
        )
    }, [postList])

    if (isLoading) return <Loader/>

    return (
        <ComponentList>
            {postComponents}
        </ComponentList>
    );
}

export default PostCardList;

