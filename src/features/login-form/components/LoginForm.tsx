import React, {useEffect} from 'react';
import { Formik, Field} from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

import {Button, TextInputField} from "../../../shared/ui";
import {authApi} from "../../../shared/api";
import styles from "./LoginForm.module.scss";


export const LoginForm = () => {
    const navigate = useNavigate();
    const [login, {isSuccess, isLoading}] = authApi.useLoginMutation();

    useEffect(() => {
        if (isSuccess) navigate(`/`);
    }, [isSuccess, navigate]);

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                login({
                    email: values.email,
                    password: values.password,
                });
                setSubmitting(false);
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <div>
                            <Field name={"email"} type={"email"} component={TextInputField}>Email</Field>
                            <Field name={"password"} type={"password"} component={TextInputField}>Password</Field>
                        </div>
                        <div>
                            <Button disabled={isLoading} type="submit">Login</Button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
};