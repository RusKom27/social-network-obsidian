import React, {FC, ReactNode} from 'react';

import styles from "./ComponentList.module.scss"

interface PropsType {
    children: ReactNode | ReactNode[]
}

const ComponentList: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ComponentList;