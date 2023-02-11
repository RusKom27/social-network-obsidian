import React, {FC, useEffect, useRef} from 'react';

import styles from "./TextAreaField.module.scss"
import { FieldProps } from "formik";

interface PropsType {
    type?: string;
    children?: string
}

export const TextAreaField: FC<PropsType & FieldProps> = ({
         field,
         form: { touched, errors },
         children,
         ...props
     }) => {
    const ref = useRef<HTMLTextAreaElement>(null)

    const autosize = () => {
        setTimeout(() => {
            if (ref.current) {
                ref.current.style.cssText = 'height:auto; padding:0';
                ref.current.style.cssText = `height:${ref.current.scrollHeight}px`;
            }
        }, 0);
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('keydown', autosize);
        }
    }, [ref])

    return (
        <div className={styles.container}>
            {children && <label htmlFor={field.name}>{children}</label>}
            <textarea ref={ref} {...field} {...props} placeholder={"Text something..."}/>
            <div className={styles.error_message}>
                {touched[field.name] && errors[field.name] &&
                    errors[field.name]?.toString()
                }
            </div>
        </div>
    );
}