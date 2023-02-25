import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import {Button, ButtonPropsType} from "../../../shared/ui";
import {authApi} from "../../../shared/api";
import {removeAuthData} from "../../../shared/slices/auth";
import {useAppDispatch} from "../../../shared/hooks";


export const LogoutButton: FC<ButtonPropsType> = ({onClick, ...props}) => {
    const [logout, {isLoading, isSuccess}] = authApi.useLogoutMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const clickEventHandler = () => {
        logout("");
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(removeAuthData());
            navigate(`/login`);
            if (onClick) onClick("");
        }
    }, [isSuccess, navigate, onClick]);

    return (
        <Button disabled={isLoading} {...props} onClick={clickEventHandler} size={3}>
            Logout
        </Button>
    );
};