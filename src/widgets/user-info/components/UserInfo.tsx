import {HeaderUserButton} from "../../header-user-button";
import React, {FC, ReactNode, useEffect, useState} from "react";
import {LinkButton} from "../../../shared/ui";

import styles from "./UserInfo.module.scss"
import {useAuth} from "../../../shared/hooks";
import {UserAvatar, UserLogin, UserName, UserProfileImage} from "../../../entities/user";


interface PropsType {
    children?: ReactNode[]
    user_id: string
}

export const UserInfo: FC<PropsType> = ({children, user_id}) => {
    const {isAuth} = useAuth()

    return (
        <div className={styles.container}>
            <div className={styles.user_profile_image}>
                <UserProfileImage user_id={user_id}/>
            </div>
            <div className={styles.header}>
                <div>
                    <UserAvatar size={5} user_id={user_id}/>
                </div>
                <div>
                    Options
                </div>
            </div>
            <div className={styles.main}>
                <UserName size={5} user_id={user_id}/>
                <UserLogin user_id={user_id}/>
            </div>
        </div>
    )
}