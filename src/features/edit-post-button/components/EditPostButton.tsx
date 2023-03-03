import React, {memo, useContext, useEffect} from 'react';

import {Button, ButtonPropsType} from "../../../shared/ui";
import {ModalWindowContext} from "../../../shared/lib/contexts";
import {EditPostForm} from "../../edit-post-form";

interface PropsType {
    post_id: string,
    onSubmit?: () => void
}

export const EditPostButton = memo<PropsType & ButtonPropsType>(({post_id, onSubmit, ...props}) => {
    const {openModalWindow, closeModalWindow} = useContext(ModalWindowContext);

    const onClickHandler = () => {
        openModalWindow({
            title: "Post editing",
            children: <EditPostForm onSuccess={() => closeModalWindow()} post_id={post_id}/>,
        });
    };

    return (
        <Button onClick={onClickHandler} size={4} {...props}>
            Edit
        </Button>
    );

});