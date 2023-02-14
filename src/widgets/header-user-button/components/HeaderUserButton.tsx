import React, {useContext, useRef} from 'react';

import styles from "./HeaderUserButton.module.scss";
import {Button, Icon, Loader} from "../../../shared/ui";
import {UserAvatar, UserLogin, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";
import {HoverCardContext} from "../../../shared/lib/contexts";
import {LogoutButton} from "../../../features";


const HeaderUserButton = () => {
    const user_id = useAppSelector(state => state.auth.user_id);
    const ref = useRef<HTMLDivElement>(null);
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext);

    const onClickHandler = () => {
        openHoverCard({
            children: <>
                <LogoutButton border={false} onClick={() => closeHoverCard()}/>
            </>,
            targetElement: ref.current,
            position: "fixed",
            align: "top",
        });
    };

    if (!user_id) return <Loader/>;

    return (
        <Button onClick={onClickHandler} size={0}>
            <div ref={ref} className={styles.container}>
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
};

export default HeaderUserButton;

