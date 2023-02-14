
import React, {FC, ReactNode} from 'react';

import styles from "./Layout.module.scss";
import {AuthBar, Navbar} from "../../widgets";

interface PropsType {
    children: ReactNode
}

const Layout: FC<PropsType> = ({children}) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <Navbar />
                    <AuthBar />
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Layout;