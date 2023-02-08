import React, {FC} from 'react';

import {NavLink, useLocation} from "react-router-dom";
import {FillableIcon, FillableIconType} from "../../icon";

import styles from "./NavTab.module.scss"
import {Button, ButtonPropsType} from "../../button";


interface PropsType {
    to: string
    icon_type?: FillableIconType
}

const NavTab: FC<PropsType & ButtonPropsType> = (
    {
        children,
        to,
        ...props
    }
    ) => {
    const activeClassName: ((props: {isActive: boolean}) => string) = ({isActive}) =>
        isActive ? [styles.active, styles.container].join(' ') : styles.container

    return (
        <NavLink
            to={to}
            className={activeClassName}
        >
            <div>
                <div>{children}</div>
                <div className={styles.highlight_line}></div>
            </div>
        </NavLink>
    )
}

export default NavTab;