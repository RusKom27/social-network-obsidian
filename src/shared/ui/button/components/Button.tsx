import React, {FC, ReactNode} from 'react';

import styles from "./Button.module.scss"

export interface ButtonPropsType {
    children?: ReactNode | ReactNode[] | string
    onClick?: (event: React.MouseEvent | any) => void
    type?: "submit" | "reset" | "button"
    hover_highlight?: "all" | "icon"
    hover_color?: "default" | "red" | "blue" | "orange"
    disabled?: boolean
    size?: 0 | 1 | 2 | 3 | 4 | 5
    border?: boolean
    classNames?: string[]
}

const Button: FC<ButtonPropsType> = (
    {
        children,
        onClick,
        type,
        size= 4,
        hover_highlight= "all",
        hover_color= "default",
        disabled=false,
        border,
        classNames = []
    }
    ) => {
    return (
        <button
            className={[styles.container, ...classNames].join(" ")}
            onClick={onClick}
            type={type}
            disabled={disabled}
            data-hover-highlight={hover_highlight}
            data-hover-color={hover_color}
            data-size={size}
            data-border={border}
        >
            {children}
        </button>
    )
}

export default Button;