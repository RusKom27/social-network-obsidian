import React, {FC} from 'react';

import {FillableIcons} from "../../../images/svg"

import styles from "./FillableIcon.module.scss"

export type FillableIconType = "Home" | "Profile" | "Search" | "Bookmark" | "Notifications" | "Messages"

interface PropsType {
    filled: boolean
    type?: FillableIconType
    size: 0 | 1 | 2 | 3 | 4 | 5
}

const FillableIcon: FC<PropsType> = ({filled, type, size}) => {
    if (!type) return null

    const icon_key = `${type}${filled ? "Filled" : ''}SVG`

    const IconComponent =  FillableIcons[icon_key as keyof typeof FillableIcons]

    return (
        <div className={styles.container} data-size={size}>
            <IconComponent />
        </div>
    )
}

export default FillableIcon;