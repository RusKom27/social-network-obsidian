import React, {FC} from 'react';

import styles from "./DefaultField.module.scss"
import { FieldProps } from "formik";

interface PropsType {
    type?: string;
    children: string
}

const DefaultField: FC<PropsType & FieldProps> = ({
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

export default DefaultField