import React, {FC, useEffect} from 'react';

import {Button, Loader} from "../../../shared/ui";
import {authApi} from "../../../shared/api";
import {useNavigate} from "react-router-dom";

interface PropsType {
}

export const LogoutButton: FC<PropsType> = () => {
    const [logout, {isLoading, isSuccess}] = authApi.useLogoutMutation()
    const navigate = useNavigate()

    const clickEventHandler = () => {
        logout("")
    }

    useEffect(() => {
        if (isSuccess) navigate(`/auth/login`)
    }, [isSuccess, navigate])

    if (isLoading) return <Loader/>

    return (
        <Button border={true} onClick={clickEventHandler} size={2}>
            Logout
        </Button>
    )
}