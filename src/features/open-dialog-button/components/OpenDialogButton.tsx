
import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import {Button, Icon, Loader} from "../../../shared/ui";
import {dialogApi} from "../../../shared/api";

interface PropsType {
    user_id: string
}

export const OpenDialogButton: FC<PropsType> = ({user_id}) => {
    const [openDialog, {data, isLoading, isSuccess}] = dialogApi.useOpenDialogMutation();
    const navigate = useNavigate();

    const clickEventHandler = () => {
        openDialog([user_id]);
    };

    useEffect(() => {
        if (isSuccess && data) navigate(`/messages/${data._id}`);
    }, [isSuccess, navigate, data]);

    if (isLoading) return <Loader/>;

    return (
        <Button border={true} onClick={clickEventHandler} size={2}>
            <Icon type={"Messages"} size={1}/>
        </Button>
    );
};