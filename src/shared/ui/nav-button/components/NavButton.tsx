import React, {ComponentProps, FC, ReactNode, useState} from 'react';

import {NavLink} from "react-router-dom";
import {FillableIcon, FillableIconType} from "../../fillable-icon";

import styles from "./NavButton.module.scss"


interface PropsType {
    children: ReactNode | string
    to: string
    type?: "submit" | "reset" | "button"
    size?: 0 | 1 | 2 | 3 | 4 | 5
    border?: boolean
    icon_type?: FillableIconType
    classNames?: string[]
}

const NavButton: FC<PropsType> = (
    {
        children,
        to,
        type,
        size,
        border,
        icon_type,
        classNames = []
    }
    ) => {
    const classList = [styles.container, ...classNames]
    const [activeLink, switchActiveLink] = useState(false)
    const activeClassName = (({isActive}) => {
        switchActiveLink(isActive)
        return isActive ? [styles.active, ...classList].join(' ') : classList.join(' ')
    }) as (isActive: any) => any

    return (
        <NavLink
            to={to}
            className={activeClassName}
            type={type}
            data-size={size}
            data-border={border}
        >
            {icon_type && <div>
                <FillableIcon filled={activeLink} type={icon_type} size={2}/>
            </div>}
            <div>{children}</div>
        </NavLink>
    )
}

export default NavButton;