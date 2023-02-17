
import React, {FC, ReactNode} from 'react';

import styles from "./TabBar.module.scss";


interface PropsType {
    children: ReactNode[]
}

const TabBar: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default TabBar;