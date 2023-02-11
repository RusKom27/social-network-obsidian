import React, {FC, useEffect} from 'react';

import {Button, ButtonPropsType} from "../../../shared/ui";
import {authApi} from "../../../shared/api";
import {useNavigate} from "react-router-dom";


export const LogoutButton: FC<ButtonPropsType> = ({onClick, ...props}) => {
    const [logout, {isLoading, isSuccess}] = authApi.useLogoutMutation()
    const navigate = useNavigate()

    const clickEventHandler = (event: React.MouseEvent) => {
        logout("")
    }

    useEffect(() => {
        if (isSuccess) {
            navigate(`/login`)
            if (onClick) onClick("")
        }
    }, [isSuccess, navigate, onClick])

    return (
        <Button disabled={isLoading} {...props} onClick={clickEventHandler} size={3}>
            Logout
        </Button>
    )
}