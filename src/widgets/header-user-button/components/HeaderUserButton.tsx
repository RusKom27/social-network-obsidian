import React, {FC, useContext} from 'react';

import styles from "./HeaderUserButton.module.scss"
import {Button, Icon, LinkButton, Loader} from "../../../shared/ui";
import {UserAvatar, UserLogin, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";
import {useNavigate} from "react-router-dom";
import {userApi} from "../../../shared/api";
import {HoverCardContext} from "../../../shared/lib/contexts";
import {LogoutButton} from "../../../features";

interface PropsType {

}

const HeaderUserButton: FC<PropsType> = () => {
    const user_id = useAppSelector(state => state.auth.user_id)
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext)

    const onClickHandler = () => {
        openHoverCard({ children: [
            <LogoutButton onClick={() => closeHoverCard()}/>
        ]})
    }

    if (!user_id) return <Loader/>

    return (
        <Button onClick={onClickHandler} size={0}>
            <div className={styles.container}>
                <div>
                    <UserAvatar size={0} user_id={user_id}/>
                </div>
                <div>
                    <UserName user_id={user_id}/>
                    <UserLogin user_id={user_id}/>
                </div>
                <div>
                    <Icon type={"ThreeDots"} size={1}/>
                </div>
            </div>
        </Button>
    );
}

export default HeaderUserButton;

