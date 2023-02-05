import React, {FC, ReactNode} from 'react';

import styles from "./Button.module.scss"

export interface ButtonPropsType {
    children: ReactNode | ReactNode[] | string
    onClick?: (event: React.MouseEvent) => void
    type?: "submit" | "reset" | "button"
    hover_highlight?: "all" | "icon"
    size?: 0 | 1 | 2 | 3 | 4 | 5
    border?: boolean
    classNames?: string[]
}

const Button: FC<ButtonPropsType> = (
    {
        children,
        onClick,
        type,
        size,
        hover_highlight= "all",
        border,
        classNames = []
    }
    ) => {
    return (
        <button
            className={[styles.container, ...classNames].join(" ")}
            onClick={onClick}
            type={type}
            data-hover-highlight={hover_highlight}
            data-size={size}
            data-border={border}
        >
            {children}
        </button>
    )
}

export default Button;