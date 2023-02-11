import React, {FC, ReactNode} from 'react';

import styles from "./ComponentList.module.scss"

interface PropsType {
    children: ReactNode | ReactNode[]
    borders?: "default" | "none"
}

const ComponentList: FC<PropsType> = ({children, borders = "default"}) => {
    return (
        <div
            className={styles.container}
            data-borders={borders}
        >
            {children}
        </div>
    )
}

export default ComponentList;