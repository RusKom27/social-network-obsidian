import React, {FC, ReactNode} from 'react';

import styles from "./SideContainerElement.module.scss";


interface PropsType {
    children?: ReactNode | ReactNode[]
}

const SideContainerElement: FC<PropsType> = ({children}) => {
    return (
        <header className={styles.container}>
            {children}
        </header>
    );
};

export default SideContainerElement;