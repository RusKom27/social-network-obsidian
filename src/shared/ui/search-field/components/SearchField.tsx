import React, {ChangeEvent, FC} from 'react';
import { FieldProps } from "formik";

import styles from "./SearchField.module.scss";
import {Icon} from "../../icon";


interface PropsType {
    onChangeHandler: (event: ChangeEvent) => void
}

export const SearchField: FC<PropsType & FieldProps> = ({
    field: {onChange, ...field},
    form,
    onChangeHandler,
    ...props
}) => {

    const customOnChange = (event: ChangeEvent) => {
        onChange(event);
        onChangeHandler(event);
    };

    return (
        <div className={styles.container}>
            <input onChange={customOnChange} type={"text"} {...field} {...props}/>
            <div>
                <Icon type={"Search"} size={0}/>
            </div>
        </div>
    );
};