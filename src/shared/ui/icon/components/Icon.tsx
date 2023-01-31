import React, {FC} from 'react';

import {Icons} from "../../../images/svg"

import styles from "./Icon.module.scss"

export type IconType = "Logo" | "More" | "Settings"

interface PropsType {
    type: IconType
    size: 0 | 1 | 2 | 3 | 4 | 5
}

const Icon: FC<PropsType> = ({type, size}) => {
    const icon_key = `${type}SVG`

    const IconComponent = Icons[icon_key as keyof typeof Icons]
    return (
        <div className={styles.container} data-size={size}>
            <IconComponent />
        </div>
    )
}

export default Icon;