import React, {FC, ReactNode} from 'react';

import styles from "./Button.module.scss"

export interface ButtonPropsType {
    children: ReactNode | string
    type?: "submit" | "reset" | "button"
    size?: 0 | 1 | 2 | 3 | 4 | 5
    border?: boolean
    classNames?: string[]
}

const Button: FC<ButtonPropsType> = (
    {
        children,
        type,
        size,
        border,
        classNames = []
    }
    ) => {
    return (
        <button
            className={[styles.container, ...classNames].join(" ")}
            type={type}
            data-size={size}
            data-border={border}
        >
            {children}
        </button>
    )
}

export default Button;