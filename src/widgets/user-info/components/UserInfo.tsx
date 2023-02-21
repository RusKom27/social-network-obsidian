import React, {FC} from "react";

import styles from "./UserInfo.module.scss";
import {useAppSelector} from "../../../shared/hooks";
import {UserAvatar, UserFollowInfo, UserLogin, UserName, UserProfileImage} from "../../../entities/user";
import {FollowUserButton, OpenDialogButton} from "../../../features";
import {NavTab, TabBar} from "../../../shared/ui";
import {Size} from "../../../shared/lib/types";


interface PropsType {
    user_id: string
    size?: Size
}

export const UserInfo: FC<PropsType> = ({user_id, size=5}) => {
    const auth_user_id = useAppSelector(state => state.auth.user_id);

    return (
        <div data-size={size} className={styles.container}>
            <div className={styles.user_profile_image}>
                <UserProfileImage user_id={user_id}/>
            </div>
            <div className={styles.header}>
                <div>
                    <UserAvatar size={size} user_id={user_id}/>
                </div>
                <div>
                    {auth_user_id === user_id ?
                        <>
                        </>
                        :
                        <>
                            <OpenDialogButton user_id={user_id}/>
                            <FollowUserButton user_id={user_id}/>
                        </>
                    }
                </div>
            </div>
            <div className={styles.main}>
                <div>
                    <UserName size={5} user_id={user_id}/>
                    <UserLogin user_id={user_id}/>
                </div>
                <div>
                    <UserFollowInfo user_id={user_id}/>
                </div>
            </div>
        </div>
    );
};