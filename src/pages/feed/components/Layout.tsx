import React, {FC, ReactNode} from "react";

import {Sidebar} from "../../../widgets";

import styles from "./Layout.module.scss";

interface PropsType {
    children: ReactNode
}

const Layout: FC<PropsType> = ({children}) => {
    return (
        <div className={ styles.container }>
            <div>
                <div className={styles.header}>
                    <div>
                        Home
                    </div>
                </div>
                { children }
            </div>
            <Sidebar/>
        </div>
    )
}

export default Layout;