import React, {FC, ReactNode, useState} from 'react';

import styles from "./AvatarImage.module.scss"

interface PropsType {
    children: ReactNode
}

const AvatarImage: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default AvatarImage;