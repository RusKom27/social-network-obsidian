import React, {memo, ReactNode, useEffect, useState} from 'react';

import {Button, ButtonPropsType} from "../../../shared/ui";
import {userApi} from "../../../shared/api";
import {useAppSelector} from "../../../shared/hooks";

interface PropsType {
    user_id: string,
    onSubmit?: () => void
    children?: ReactNode
}

export const FollowUserButton = memo<PropsType & ButtonPropsType>(({
    user_id,
    onSubmit,
    children,
    ...props
}) => {
    const current_user_id = useAppSelector(state => state.auth.user_id);
    const {data: target_user} = userApi.useFetchUserByIdQuery(user_id);
    const [followUser, {isLoading, isSuccess}] = userApi.useFollowUserMutation();
    const [isFollowed, setFollow] = useState(false);

    const clickEventHandler = () => {
        followUser(user_id);
    };

    useEffect(() => {
        if (onSubmit && isSuccess) onSubmit();
    }, [onSubmit, isSuccess]);

    useEffect(() => {
        if (target_user && current_user_id)
            setFollow(target_user.subscribers.includes(current_user_id));
    }, [target_user, current_user_id]);

    return (
        <Button
            disabled={isLoading}
            border={true}
            hover_color={isFollowed ? "blue" : "orange"}
            onClick={clickEventHandler}
            size={4} {...props}
        >
            {isFollowed ? "Unfollow" : "Follow"} {children}
        </Button>
    );
});