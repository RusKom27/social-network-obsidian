import React, {FC} from 'react';

import {Icons, FillableIcons} from "../../../images/svg"

import styles from "./Icon.module.scss"
import {FillableIconType, IconType} from "../types";
import {Size} from "../../../lib/types";

interface PropsType {
    type: IconType | FillableIconType
    size: Size
}

const Icon: FC<PropsType> = ({type, size}) => {
    const icon_key = `${type}SVG`

    const IconComponent = {...Icons, ...FillableIcons}[icon_key as keyof typeof Icons || FillableIcons]
    return (
        <div className={styles.container} data-size={size}>
            <IconComponent />
        </div>
    )
}

export default Icon;