import React, {FC, useMemo} from 'react';

import {postApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {PostCard} from "../../post-card";


interface PropsType {
    query?: string
}

const PostCardList: FC<PropsType> = ({query}) => {
    const {data: postIdList, isLoading} = !query ?
        postApi.useFetchAllPostIdListQuery("") :
        postApi.useFetchPostIdListByUserLoginQuery(query);

    const postComponents = useMemo(() => {
        return postIdList?.map(post_id =>
            <PostCard post_id={post_id} key={post_id}/>,
        );
    }, [postIdList]);

    if (isLoading) return <Loader/>;

    return (
        <ComponentList>
            {postComponents}
        </ComponentList>
    );
};

export default PostCardList;

