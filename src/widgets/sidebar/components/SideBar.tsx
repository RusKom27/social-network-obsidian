import React, {FC, ReactNode} from 'react';

import styles from "./Sidebar.module.scss"

interface PropsType {
    children?: ReactNode | ReactNode[]
}

const SideBar: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default SideBar;

