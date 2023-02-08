import React, {FC} from 'react';

import {PostCard} from "../../post-card";
import {postApi} from "../../../shared/api";
import {ComponentList} from "../../../shared/ui";


interface PropsType {
    query?: string
}

const MessageCardList: FC<PropsType> = ({query}) => {
    const {data: postList, isLoading} = !query ?
        postApi.useFetchAllPostListQuery("") :
        postApi.useFetchPostListByUserLoginQuery(query)

    if (isLoading || !postList) return <div>Loading</div>

    return (
        <ComponentList>
            {postList.map(post =>
                <PostCard post={post} key={post._id}/>
            )}
        </ComponentList>
    );
}

export default MessageCardList;

