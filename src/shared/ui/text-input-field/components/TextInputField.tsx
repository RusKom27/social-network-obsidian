import React, {FC} from 'react';

import styles from "./TextInputField.module.scss"
import { FieldProps } from "formik";

interface PropsType {
    type?: string;
    children: string
}

export const TextInputField: FC<PropsType & FieldProps> = ({
         field,
         form: { touched, errors },
         type = "text",
         children,
         ...props
     }) => (
    <div className={styles.container}>
        <label htmlFor={field.name}>{children}</label>
        <input type={type} {...field} {...props} />
        <div className={styles.error_message}>
        {touched[field.name] && errors[field.name] &&
            errors[field.name]?.toString()
        }
        </div>
    </div>
);