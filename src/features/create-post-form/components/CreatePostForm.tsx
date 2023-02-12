import React, {FC, useEffect} from "react";
import {Field, Formik} from "formik";
import {postApi} from "../../../shared/api";
import * as Yup from "yup"
import {Button, TextAreaField} from "../../../shared/ui";

import styles from "./CreatePostForm.module.scss"

interface PropsType {
    onSuccess: () => void
}

export const CreatePostForm: FC<PropsType> = ({onSuccess}) => {
    const [createPost, {isSuccess}] = postApi.useCreatePostMutation()

    useEffect(() => {
        if (isSuccess) {
            onSuccess()
        }
    }, [isSuccess, onSuccess])

    return (
        <Formik
            initialValues={{post_text: '',}}
            validationSchema={Yup.object({
                post_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                createPost(values.post_text)
                setSubmitting(false)
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <div>
                            <Field type={"PostInput"} name={"post_text"} component={TextAreaField}></Field>
                        </div>
                        <div>
                            <Button type="submit">Create</Button>
                        </div>
                    </form>
                )
            }}
        </Formik>
    );
};