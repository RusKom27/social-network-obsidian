import React, {FC} from 'react';

import {Icons} from "../../../images/svg"

import styles from "./Icon.module.scss"

export type IconType = "Logo" | "More" | "Settings"

interface PropsType {
    type: IconType
}

const Icon: FC<PropsType> = ({type}) => {
    const icon_key = `${type}SVG`

    const IconComponent =  Icons[icon_key as keyof typeof Icons]
    return <IconComponent />
}

export default Icon;