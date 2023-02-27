import React, {memo, useEffect} from 'react';

import {Button, ButtonPropsType} from "../../../shared/ui";
import {postApi} from "../../../shared/api";

interface PropsType {
    post_id: string,
    onSubmit?: () => void
}

export const EditPostButton = memo<PropsType & ButtonPropsType>(({post_id, onSubmit, ...props}) => {
    const [deletePost, {isLoading, isSuccess}] = postApi.useDeletePostMutation();

    const clickEventHandler = () => {
        deletePost(post_id);
    };

    useEffect(() => {
        if (onSubmit && isSuccess) onSubmit();
    }, [onSubmit, isSuccess]);

    return (
        <Button disabled={isLoading} hover_color={"red"} onClick={clickEventHandler} size={4} {...props}>
            Delete
        </Button>
    );
});