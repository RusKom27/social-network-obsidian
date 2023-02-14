
import React, {FC} from "react";

import styles from "./UserInfo.module.scss";
import {useAppSelector} from "../../../shared/hooks";
import {UserAvatar, UserFollowInfo, UserLogin, UserName, UserProfileImage} from "../../../entities/user";
import {ProfileNavbar} from "../../profile_navbar";
import {OpenDialogButton} from "../../../features";


interface PropsType {
    user_id: string
}

export const UserInfo: FC<PropsType> = ({user_id}) => {
    const auth_user_id = useAppSelector(state => state.auth.user_id);

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
                    {auth_user_id === user_id ?
                        "" :
                        <OpenDialogButton user_id={user_id}/>
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
            <ProfileNavbar/>
        </div>
    );
};