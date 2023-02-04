import React from 'react';
import { Formik, Field, Form} from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import {authApi} from "../../../shared/api";
import {Button, DefaultField} from "../../../shared/ui";

import styles from "./LoginForm.module.scss"

export const LoginForm = () => {
    const navigate = useNavigate()
    const [login, {isSuccess}] = authApi.useLoginMutation()

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
                    password: values.password
                })
                if (isSuccess) {
                    setSubmitting(false);
                    navigate(`/`)
                }
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <div>
                            <Field name={"email"} type={"email"} component={DefaultField}>Email</Field>
                            <Field name={"password"} type={"password"} component={DefaultField}>Password</Field>
                        </div>
                        <div>
                            <Button type="submit">Login</Button>
                        </div>
                    </form>
                )
            }}
        </Formik>
    )
}