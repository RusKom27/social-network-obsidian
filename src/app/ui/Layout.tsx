import React, {FC, ReactNode} from 'react';

import styles from "./Layout.module.scss"
import {Navbar} from "../../widgets/navbar";

interface PropsType {
    children: ReactNode
}

const Layout: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default Layout;