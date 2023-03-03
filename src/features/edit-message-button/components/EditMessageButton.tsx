import React, {memo, useContext, useEffect} from 'react';

import {Button, ButtonPropsType} from "../../../shared/ui";
import {ModalWindowContext} from "../../../shared/lib/contexts";
import {EditMessageForm} from "../../edit-message-form";

interface PropsType {
    message_id: string,
    onSubmit?: () => void
}

export const EditMessageButton = memo<PropsType & ButtonPropsType>(({message_id, onSubmit, ...props}) => {
    const {openModalWindow, closeModalWindow} = useContext(ModalWindowContext);

    const onClickHandler = () => {
        openModalWindow({
            title: "Message editing",
            children: <EditMessageForm onSuccess={() => closeModalWindow()} message_id={message_id}/>,
        });
    };

    return (
        <Button onClick={onClickHandler} size={4} {...props}>
            Edit
        </Button>
    );

});