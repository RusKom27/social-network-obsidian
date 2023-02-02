import React, {FC, ReactNode, useState} from 'react';

import styles from "./PageHeader.module.scss"

interface PropsType {
    children?: ReactNode | ReactNode[]
}

const PageHeader: FC<PropsType> = ({children}) => {

    return (
        <header className={styles.container}>
            <div>
                {children}
            </div>
        </header>
    )
}

export default PageHeader;