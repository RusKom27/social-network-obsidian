import React, {FC, ReactNode, useState} from 'react';

import styles from "./Layout.module.scss"
import {HeaderUserButton, Navbar} from "../../widgets";
import {BrowserRouter} from "react-router-dom";
import {OpenLoginModalWindow, OpenRegistrationModalWindow} from "../../features";

interface PropsType {
    children: ReactNode
}

const Layout: FC<PropsType> = ({children}) => {
    const [isAuth, setAuth] = useState(false)

    return (
        <BrowserRouter>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <Navbar />
                        <div className={styles.auth}>
                            {isAuth && <HeaderUserButton/>}
                            {!isAuth && <OpenRegistrationModalWindow/>}
                            {!isAuth && <OpenLoginModalWindow/>}
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Layout;