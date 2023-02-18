import React, {FC, ReactNode} from 'react';

import styles from "./Sidebar.module.scss";
import {PageHeader} from "../../../shared/ui";


interface PropsType {
    children?: ReactNode | ReactNode[]
}

const SideBar: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            <div>
                <PageHeader withBackButton={false}>Search</PageHeader>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SideBar;

