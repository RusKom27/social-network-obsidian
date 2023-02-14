import React, {useContext} from 'react';

import {Button, Icon} from "../../../shared/ui";
import {ModalWindowContext} from "../../../shared/lib/contexts";
import {CreatePostForm} from "../../create-post-form";

export const OpenCreationPostWindowButton = () => {
    const {openModalWindow, closeModalWindow} = useContext(ModalWindowContext);

    const onClickHandler = () => {
        openModalWindow({
            title: "Post Creating",
            children: <CreatePostForm onSuccess={() => closeModalWindow()}/>,
        });
    };

    return (
        <Button background_color={"blue"} onClick={onClickHandler} size={4}>
            <Icon type={"CreatePost"} size={2}/>
            <div>Create post</div>
        </Button>
    );
};