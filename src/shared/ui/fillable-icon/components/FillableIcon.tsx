import React, {FC} from 'react';

import {FillableIcons} from "../../../images/svg"

import styles from "./FillableIcon.module.scss"

export type FillableIconType = "Home" | "Profile" | "Search" | "Bookmark" | "Notifications" | "Messages"

interface PropsType {
    filled: boolean
    type?: FillableIconType
}

const FillableIcon: FC<PropsType> = ({filled, type}) => {
    if (!type) return null

    const icon_key = `${type}${filled ? "Filled" : ''}SVG`

    const IconComponent =  FillableIcons[icon_key as keyof typeof FillableIcons]

    return <IconComponent />
}

export default FillableIcon;