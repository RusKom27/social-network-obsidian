import React, {FC, ReactNode} from 'react';

import styles from "./Layout.module.scss"
import {Navbar} from "../../widgets";
import {BrowserRouter} from "react-router-dom";

interface PropsType {
    children: ReactNode
}

const Layout: FC<PropsType> = ({children}) => {
    return (
        <BrowserRouter>
            <div className={[styles.container, ".light_theme"].join(' ')}>
                <Navbar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Layout;