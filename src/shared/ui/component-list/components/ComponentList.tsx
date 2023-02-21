import React, {FC, ReactNode} from 'react';
import * as CSS from "csstype";

import styles from "./ComponentList.module.scss";


interface PropsType {
    children: ReactNode | ReactNode[]
    borders?: "default" | "none"
    custom_styles?: CSS.Properties<string | number>
}

const ComponentList: FC<PropsType> = ({children, borders = "default", custom_styles}) => {
    return (
        <div
            className={styles.container}
            data-borders={borders}
            style={custom_styles}
        >
            {children}
        </div>
    );
};

export default ComponentList;