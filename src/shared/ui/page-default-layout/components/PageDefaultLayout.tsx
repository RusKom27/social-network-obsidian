import React, {FC, ReactNode} from 'react';

import styles from "./PageDefaultLayout.module.scss"
import {PageHeader} from "../../page-header";

interface PropsType {
    children: ReactNode
    header: string | ReactNode | ReactNode[]
}

const PageDefaultLayout: FC<PropsType> = ({children, header}) => {
    return (
        <div className={ styles.container }>
            <PageHeader>{header}</PageHeader>
            { children }
        </div>
    )
}

export default PageDefaultLayout;