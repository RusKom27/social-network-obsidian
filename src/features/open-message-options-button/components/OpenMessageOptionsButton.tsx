import React, {FC, useContext, useRef} from 'react';

import {Button, Icon, Loader} from "../../../shared/ui";
import {HoverCardContext} from "../../../shared/lib/contexts";
import {DeleteMessageButton} from "../../delete-message-button";
import {messageApi, postApi} from "../../../shared/api";
import {useAppSelector} from "../../../shared/hooks";
import {EditMessageButton} from "../../edit-message-button";


interface PropsType {
    message_id: string
}

export const OpenMessageOptionsButton: FC<PropsType> = ({message_id}) => {
    const {data: message} = messageApi.useFetchMessageQuery(message_id);
    const user_id = useAppSelector(state => state.auth.user_id);
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext);
    const optionRef = useRef<HTMLDivElement>(null);

    if (!message) return <Loader/>;

    const onClickHandler = () => {
        openHoverCard({
            children: <>
                { message.sender_id === user_id && <>
                    <DeleteMessageButton
                        size={ 1 }
                        border={ false }
                        onSubmit={ () => closeHoverCard() }
                        message_id={ message_id }
                    />
                    <EditMessageButton
                        size={ 1 }
                        message_id={message_id}
                    />
                </>}
            </>,
            targetElement: optionRef.current,
            position: "absolute",
            vertical_align: "same",
        });
    };

    return (
        <div ref={optionRef}>
            <Button onClick={onClickHandler} size={0}>
                <Icon type={"ThreeDots"} size={1}/>
            </Button>
        </div>

    );
};