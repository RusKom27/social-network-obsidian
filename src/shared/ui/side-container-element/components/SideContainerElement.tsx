import React, {FC, ReactNode} from 'react';

import styles from "./SideContainerElement.module.scss";


interface PropsType {
    children?: ReactNode | ReactNode[]
    title?: string
}

const SideContainerElement: FC<PropsType> = ({children, title}) => {
    return (
        <div className={styles.container}>
            {title && <div className={styles.title}>
                {title}
            </div>}
            {children}
        </div>
    );
};

export default SideContainerElement;