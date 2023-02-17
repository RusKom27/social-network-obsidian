
import React, {FC, ReactNode} from 'react';

import styles from "./PageDefaultLayout.module.scss";
import {PageHeader} from "../../page-header";

interface PropsType {
    children: ReactNode
}

const PageDefaultLayout: FC<PropsType> = ({children}) => {
    return (
        <div className={ styles.container }>
            { children }
        </div>
    );
};

export default PageDefaultLayout;