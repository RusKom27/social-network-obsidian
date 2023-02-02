import React, {FC} from 'react';

import styles from "./Navbar.module.scss"
import {NavButton} from "../../../shared/ui";
import {Icon} from "../../../shared/ui/icon";


interface PropsType {

}

const Navbar: FC<PropsType> = () => {
    return (
        <nav className={styles.container}>
            <NavButton to={"/"}><Icon type={"Logo"} size={2}/></NavButton>
            <NavButton to={"/"} icon_type={"Home"}>Main</NavButton>
            <NavButton to={"/profile"} icon_type={"Profile"}>Profile</NavButton>
            <NavButton to={"/messages"} icon_type={"Messages"}>Messages</NavButton>
            <NavButton to={"/notifications"} icon_type={"Notifications"}>Notifications</NavButton>
        </nav>
    );
}

export default Navbar;

