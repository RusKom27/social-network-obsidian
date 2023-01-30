import React, {FC, ReactNode, useRef} from 'react';

import {NavLink} from "react-router-dom";

import styles from "./NavButton.module.scss"
import * as fs from "fs";

interface PropsType {
    children: ReactNode | string
    to: string
    type?: "submit" | "reset" | "button"
    size?: 0 | 1 | 2 | 3 | 4 | 5
    border?: boolean
    classNames?: string[]
}

const NavButton: FC<PropsType> = (
    {
        children,
        to,
        type,
        size,
        border,
        classNames = []
    }
    ) => {
    const classList = [styles.container, ...classNames]
    const activeClassName = (({isActive}) => {
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
            {children}
        </NavLink>
    )
}

export default NavButton;