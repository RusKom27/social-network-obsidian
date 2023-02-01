import React, {FC, useState} from 'react';

import {NavLink} from "react-router-dom";
import {FillableIcon, FillableIconType} from "../../fillable-icon";

import styles from "./NavButton.module.scss"
import {Button, ButtonPropsType} from "../../button";


interface PropsType {
    to: string
    icon_type?: FillableIconType
}

const NavButton: FC<PropsType & ButtonPropsType> = (
    {
        children,
        to,
        icon_type,
        ...props
    }
    ) => {
    const [isActiveLink, switchActiveLink] = useState(false)
    const activeClassName: ((props: {isActive: boolean}) => string) = ({isActive}) => {
        switchActiveLink(isActive)
        return isActive ? [styles.active, styles.container].join(' ') : styles.container
    }

    return (
        <NavLink
            to={to}
            className={activeClassName}
        >
            <Button {...props}>
                {icon_type && <div>
                    <FillableIcon filled={isActiveLink} type={icon_type} size={2}/>
                </div>}
                <div>{children}</div>
            </Button>
        </NavLink>
    )
}

export default NavButton;