import React, {FC} from 'react';
import { FieldProps } from "formik";

import styles from "./TextInputField.module.scss";

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
        {children && <label htmlFor={field.name}>{children}</label>}
        <input type={type} {...field} {...props} autoComplete={"off"}/>
        <div className={styles.error_message}>
            {touched[field.name] && errors[field.name] &&
            errors[field.name]?.toString()
            }
        </div>
    </div>
);