import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import styles from "./NavTab.module.scss";
import {FillableIconType} from "../../icon";
import {ButtonPropsType} from "../../button";




interface PropsType {
    to: string
    icon_type?: FillableIconType
}

const NavTab: FC<PropsType & ButtonPropsType> = (
    {
        children,
        to,
    },
) => {
    const activeClassName: ((props: {isActive: boolean}) => string) = ({isActive}) =>
        isActive ? [styles.active, styles.container].join(' ') : styles.container;

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
    );
};

export default NavTab;