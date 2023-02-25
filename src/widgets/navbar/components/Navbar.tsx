
import React, {useEffect} from 'react';

import styles from "./Navbar.module.scss";
import {NavButton} from "../../../shared/ui";
import {Icon} from "../../../shared/ui/icon";
import {userApi} from "../../../shared/api";
import {useAppSelector, useAuth} from "../../../shared/hooks";
import {OpenCreationPostWindowButton} from "../../../features";


const Navbar = () => {
    const isAuth = useAuth();
    const user_id = useAppSelector(state => state.auth.user_id);
    const {data: user} = userApi.useFetchUserByIdQuery(user_id);

    return (
        <nav className={styles.container}>
            <NavButton to={"/"}><Icon type={"Logo"} size={2}/></NavButton>
            <NavButton to={"/"} icon_type={"Home"}>Main</NavButton>
            {user_id && <NavButton to={`/profile/${user?.login}/`} icon_type={"Profile"}>Profile</NavButton>}
            {user_id && <NavButton to={"/messages/"} icon_type={"Messages"}>Messages</NavButton>}
            {user_id && <NavButton to={"/notifications/"} icon_type={"Notifications"}>Notifications</NavButton>}
            {user_id && <NavButton to={"/settings/"} icon_type={"Settings"}>Settings</NavButton>}
            {user_id && <OpenCreationPostWindowButton/>}
        </nav>
    );
};

export default Navbar;

