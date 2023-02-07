import React, {FC} from 'react';

import styles from "./EmptyImage.module.scss"

interface PropsType {
}

const EmptyImage: FC<PropsType> = () => {
    return (
        <img className={styles.image} alt=""/>
    )
}

export default EmptyImage;