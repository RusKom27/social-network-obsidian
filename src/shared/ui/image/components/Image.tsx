import React, {FC, ReactNode} from 'react';

import styles from "./Image.module.scss"
import {ImageType} from "../types";

interface PropsType {
    children: ReactNode,
    type?: ImageType,
    size?: 0 | 1 | 2 | 3 | 4 | 5
}

const Image: FC<PropsType> = ({children, type= "default", size= 2}) => {
    return (
        <div
            className={styles.container}
            data-image-type={type}
            data-size={size}
        >
            {children}
        </div>
    )
}

export default Image;