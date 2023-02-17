import React, {FC, useMemo} from 'react';

import {postApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {PostCard} from "../../post-card";
import {PostRequestQuery} from "../../../shared/api/types";


interface PropsType {
    post_request_query?: PostRequestQuery
}

const PostCardList: FC<PropsType> = ({post_request_query}) => {
    const {data: postIdList, isLoading} = postApi.useFetchAllPostIdListQuery(post_request_query);

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

