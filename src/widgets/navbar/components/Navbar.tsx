import React, {FC} from 'react';

import styles from "./Navbar.module.scss"

interface PropsType {

}

const Navbar: FC<PropsType> = () => {
    return (
        <div className={styles.container}>
            <div>Main</div>
            <div>Messages</div>
            <div>Notifications</div>
        </div>
    );
}

export default Navbar;