import React, {memo, useEffect, useState} from 'react';

import {Button, FillableIcon} from "../../../shared/ui";
import {postApi} from "../../../shared/api";
import {useAppSelector} from "../../../shared/hooks";

interface PropsType {
    post_id: string
}

export const LikePostButton = memo<PropsType>(({post_id}) => {
    const user_id = useAppSelector(state => state.auth.user_id);
    const {data: post} = postApi.useFetchPostQuery(post_id);
    const [likePost, {data: mutated_post}] = postApi.useLikePostMutation();
    const [isLiked, setIsLiked] = useState(false);

    const clickEventHandler = () => {
        likePost(post_id);
        setIsLiked(isLiked => !isLiked);
    };

    useEffect(() => {
        if (user_id) {
            if (mutated_post) setIsLiked(mutated_post?.likes.includes(user_id));
            if (post) setIsLiked(post?.likes.includes(user_id));
        }
    }, [mutated_post, post, user_id]);

    if (!post) return <div>Loading</div>;

    return (
        <Button hover_color={"red"} onClick={clickEventHandler} hover_highlight={"icon"} size={4}>
            <FillableIcon filled={isLiked} type={"Like"} size={1}/>{post.likes.length}
        </Button>
    );
});