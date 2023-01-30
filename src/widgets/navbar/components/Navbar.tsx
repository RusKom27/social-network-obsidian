import React, {FC} from 'react';

import styles from "./Navbar.module.scss"
import {NavButton, MainLogo} from "../../../shared/ui";

interface PropsType {

}

const Navbar: FC<PropsType> = () => {
    return (
        <div className={styles.container}>
            <NavButton to={"/"}><MainLogo/></NavButton>
            <NavButton to={"/"}>Main</NavButton>
            <NavButton to={"/messages"}>Messages</NavButton>
            <NavButton to={"/notifications"}>Notifications</NavButton>
        </div>
    );
}

export default Navbar;

