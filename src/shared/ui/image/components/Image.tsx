import React, {FC, ReactNode} from 'react';

import styles from "./Image.module.scss"
import {ImageType} from "../types";
import {Size} from "../../../lib/types";

interface PropsType {
    children: ReactNode,
    type?: ImageType,
    size?: Size
}

const Image: FC<PropsType> = ({children, type= "default", size}) => {
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