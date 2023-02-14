
import {Link} from "react-router-dom";
import React, {FC} from 'react';

import styles from "./LinkButton.module.scss";
import {FillableIconType,Icon, IconType} from "../../icon";
import {Button, ButtonPropsType} from "../../button";



interface PropsType {
    to: string
    icon_type?: FillableIconType & IconType
}

const LinkButton: FC<PropsType & ButtonPropsType> = (
    {
        to,
        children,
        icon_type,
        ...props
    },
) => {

    return (
        <Link
            to={to}
            className={styles.container}
        >
            <Button {...props}>
                {icon_type && <div>
                    <Icon type={icon_type} size={2}/>
                </div>}
                <div>{children}</div>
            </Button>
        </Link>
    );
};

export default LinkButton;