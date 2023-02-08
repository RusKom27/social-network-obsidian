import React, {FC} from 'react';

import styles from "./HeaderUserButton.module.scss"
import {Button, LinkButton, Loader} from "../../../shared/ui";
import {UserAvatar, UserLogin, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";
import {useNavigate} from "react-router-dom";
import {userApi} from "../../../shared/api";

interface PropsType {

}

const HeaderUserButton: FC<PropsType> = () => {
    const user_id = useAppSelector(state => state.auth.user_id)

    if (!user_id) return <Loader/>

    return (
        <Button size={0}>
            <div className={styles.container}>
                <div>
                    <UserAvatar size={0} user_id={user_id}/>
                </div>
                <div>
                    <UserName user_id={user_id}/>
                    <UserLogin user_id={user_id}/>
                </div>
                <div>
                    Opt
                </div>
            </div>
        </Button>
    );
}

export default HeaderUserButton;

