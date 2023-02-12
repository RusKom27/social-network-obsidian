import React, {FC, useEffect, useRef} from "react";
import {Field, Formik} from "formik";
import {messageApi, postApi} from "../../../shared/api";
import * as Yup from "yup"
import {Button, Loader, TextAreaField} from "../../../shared/ui";

import styles from "./CreateMessageForm.module.scss"
import {useParams} from "react-router-dom";

interface PropsType {
    onSuccess?: () => void
}

export const CreateMessageForm: FC<PropsType> = ({onSuccess}) => {
    const [createMessage, {isSuccess}] = messageApi.useCreateMessageMutation()
    const dialog_id = useParams().dialog_id
    const ref = useRef<HTMLFormElement>(null)

    const submitOnEnter = (event: KeyboardEvent) => {
        if (event.key === "Enter" && ref.current && !event.shiftKey) {
            event.preventDefault();
            ref.current.requestSubmit()
            window.scrollTo({
                top: 9999,
                behavior: "smooth"
            })
        }
    }

    useEffect(() => {
        if (isSuccess && onSuccess) {
            onSuccess()
        }
    }, [isSuccess, onSuccess])

    if (!dialog_id) return <Loader/>

    return (
        <Formik
            initialValues={{message_text: '',}}
            validationSchema={Yup.object({
                message_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                createMessage({
                    dialog_id,
                    text: values.message_text
                })
                resetForm()
                setSubmitting(false)
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form ref={ref} className={styles.container} onSubmit={handleSubmit}>
                        <div>
                            <Field onKeyDown={submitOnEnter} max_height={100} type={"MessageInput"} name={"message_text"} component={TextAreaField}></Field>
                            <input hidden type="submit" tabIndex={-1}/>
                        </div>
                    </form>
                )
            }}
        </Formik>
    );
};