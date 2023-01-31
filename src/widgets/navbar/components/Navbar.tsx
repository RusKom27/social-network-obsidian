import React, {FC} from 'react';

import styles from "./Navbar.module.scss"
import {NavButton, MainLogo} from "../../../shared/ui";
import {HomeFilledSVG} from "../../../shared/images/svg"


interface PropsType {

}

const Navbar: FC<PropsType> = () => {
    return (
        <nav className={styles.container}>
            <NavButton to={"/"}><MainLogo/></NavButton>
            <NavButton to={"/"}><HomeFilledSVG/>Main</NavButton>
            <NavButton to={"/messages"}>Messages</NavButton>
            <NavButton to={"/notifications"}>Notifications</NavButton>
        </nav>
    );
}

export default Navbar;

