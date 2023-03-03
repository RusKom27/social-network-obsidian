import React, {FC, ReactNode} from 'react';

import styles from "./ComponentList.module.scss";


interface PropsType {
    children: ReactNode | ReactNode[]
    borders?: "default" | "none"
    reverse?: boolean
}

const ComponentList: FC<PropsType> = ({
    children,
    borders = "default",
    reverse=false,
}) => {
    return (
        <div
            className={styles.container}
            data-borders={borders}
            data-reverse={reverse}
        >
            {children}
        </div>
    );
};

export default ComponentList;