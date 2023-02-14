import React, {FC, useEffect, useRef} from 'react';
import { FieldProps } from "formik";

import styles from "./TextAreaField.module.scss";

interface PropsType {
    type: "PostInput" | "MessageInput"
    max_height?: number
    autosize: boolean
    children?: string
}

export const TextAreaField: FC<PropsType & FieldProps> = ({
    type,
    max_height,
    autosize=true,
    field,
    form: { touched, errors },
    children,
    ...props
}) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const autosizeTextArea = () => {
        setTimeout(() => {
            if (ref.current && (!max_height || max_height > ref.current.scrollHeight)) {
                ref.current.style.cssText = 'height:auto; padding:0';
                ref.current.style.cssText = `height:${ref.current.scrollHeight}px`;
            }
        }, 0);
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('keydown', autosizeTextArea);
        }
    }, [ref]);

    return (
        <div data-input-type={type} className={styles.container}>
            {children && <label htmlFor={field.name}>{children}</label>}
            <textarea ref={ref} {...field} {...props} placeholder={"Text something..."}/>
            <div className={styles.error_message}>
                {touched[field.name] && errors[field.name] &&
                    errors[field.name]?.toString()
                }
            </div>
        </div>
    );
};