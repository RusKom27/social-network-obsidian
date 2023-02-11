import React, {FC} from 'react';

import {NavLink} from "react-router-dom";
import {FillableIcon, FillableIconType} from "../../icon";

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
    const activeClassName: ((props: {isActive: boolean}) => string) = ({isActive}) =>
        isActive ? [styles.active, styles.container].join(' ') : styles.container

    return (
        <NavLink
            to={to}
            className={activeClassName}
        >
            {({isActive}) =>
                <Button {...props}>
                    {icon_type &&
                        <div>
                            <FillableIcon filled={isActive} type={icon_type} size={2}/>
                        </div>
                    }
                    <div>{children}</div>
                </Button>
            }
        </NavLink>
    )
}

export default NavButton;