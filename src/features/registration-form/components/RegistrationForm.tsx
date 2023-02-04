import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {authApi} from "../../../shared/api";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup"
import {Button, DefaultField} from "../../../shared/ui";

import styles from "./RegistrationForm.module.scss"


export const RegistrationForm = () => {
    const navigate = useNavigate()
    const [registration, {isSuccess}] = authApi.useRegistrationMutation()

    return (
        <Formik
            initialValues={{name: '', login: '', email: '', password: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                login: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                registration({
                    name: values.name,
                    login: values.login,
                    email: values.email,
                    password: values.password
                })
                if (isSuccess) {
                    setSubmitting(false)
                    navigate(`/`)
                }
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <div>
                            <Field name={"name"} type={"text"} component={DefaultField}>Name</Field>
                            <Field name={"login"} type={"text"} component={DefaultField}>Login</Field>
                            <Field name={"email"} type={"email"} component={DefaultField}>Email</Field>
                            <Field name={"password"} type={"password"} component={DefaultField}>Password</Field>
                        </div>
                        <div>
                            <Button type="submit">Registration</Button>
                        </div>
                    </form>
                )
            }
            }

        </Formik>
    );
};