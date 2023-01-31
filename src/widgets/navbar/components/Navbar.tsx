import React, {FC} from 'react';

import styles from "./Navbar.module.scss"
import {NavButton, MainLogo} from "../../../shared/ui";
import {Icon} from "../../../shared/ui/icon";


interface PropsType {

}

const Navbar: FC<PropsType> = () => {
    return (
        <nav className={styles.container}>
            <NavButton to={"/"}><Icon type={"Logo"}/></NavButton>
            <NavButton to={"/"} icon_type={"Home"}>Main</NavButton>
            <NavButton to={"/messages"} icon_type={"Home"}>Messages</NavButton>
            <NavButton to={"/notifications"} icon_type={"Home"}>Notifications</NavButton>
        </nav>
    );
}

export default Navbar;

