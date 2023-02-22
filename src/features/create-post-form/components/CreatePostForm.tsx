import React, {FC, useEffect, useState} from "react";
import {Field, Formik} from "formik";
import * as Yup from "yup";

import styles from "./CreatePostForm.module.scss";
import {imageApi, postApi} from "../../../shared/api";
import {Button, TextAreaField} from "../../../shared/ui";
import {LoadImageButton} from "../../load-image-button";
// import {loadImage} from "../../../shared/api/services/imageApi";


interface PropsType {
    onSuccess: () => void
}

export const CreatePostForm: FC<PropsType> = ({onSuccess}) => {
    const [createPost, {isSuccess}] = postApi.useCreatePostMutation();
    const [loadImage] = imageApi.useLoadImageMutation();
    const [file, setFile] = useState<File | null | undefined>(null);

    useEffect(() => {
        if (isSuccess) {
            onSuccess();
        }
    }, [isSuccess, onSuccess]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.item(0));
    };

    return (
        <Formik
            initialValues={{post_text: ''}}
            validationSchema={Yup.object({
                post_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required('Required'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
                createPost({
                    text: values.post_text,
                    image: file ? file.name : "",
                });
                if (file) loadImage(file);
                setSubmitting(false);
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <div>
                            <Field type={"PostInput"} name={"post_text"} component={TextAreaField}></Field>
                        </div>
                        <div>
                            <LoadImageButton onImageInput={handleImageChange}/>
                            <Button type="submit">Create</Button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
};