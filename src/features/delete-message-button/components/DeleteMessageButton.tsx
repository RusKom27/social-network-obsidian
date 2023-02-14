
import React, {memo, useEffect} from 'react';

import {Button, ButtonPropsType} from "../../../shared/ui";
import {messageApi} from "../../../shared/api";

interface PropsType {
    message_id: string,
    onSubmit?: () => void
}

export const DeleteMessageButton = memo<PropsType & ButtonPropsType>(({message_id, onSubmit, ...props}) => {
    const [deleteMessage, {isLoading, isSuccess}] = messageApi.useDeleteMessageMutation();

    const clickEventHandler = () => {
        deleteMessage(message_id);
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