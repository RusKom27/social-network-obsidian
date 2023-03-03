import React, {FC, useEffect, useState} from "react";
import {Field, Formik} from "formik";
import * as Yup from "yup";

import {Button, Icon, Image, Loader, TextAreaField} from "../../../shared/ui";
import {imageApi, messageApi, postApi} from "../../../shared/api";
import styles from "./EditPostForm.module.scss";
import {LoadImageButton} from "../../load-image-button";

interface PropsType {
    post_id: string
    onSuccess?: () => void
}

export const EditPostForm: FC<PropsType> = ({onSuccess, post_id}) => {
    const [updatePost, {isLoading, isSuccess}] = postApi.useUpdatePostMutation();
    const [loadImage] = imageApi.useLoadImageMutation();
    const {data: post} = postApi.useFetchPostQuery(post_id);
    const [file, setFile] = useState<File | null | undefined>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.item(0));
    };

    useEffect(() => {
        if (isSuccess && onSuccess) onSuccess();
    }, [isSuccess, onSuccess]);

    if (!post) return <Loader/>;

    return (
        <Formik
            initialValues={{post_text: post.text}}
            validationSchema={Yup.object({
                post_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required('Required'),
            })}
            onSubmit={async (values, { setSubmitting }) => {
                updatePost({
                    _id: post._id,
                    text: values.post_text || post.text,
                    image: file ? file.name : post.image,
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
                            <div>
                                {file && <div className={styles.image_preview}>
                                    <div onClick={() => setFile(null)}>
                                        <Image size={5}>
                                            <img src={URL.createObjectURL(file)} alt=""/>
                                        </Image>
                                        <div>
                                            <Icon type={"Cross"} size={3}/>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div>
                            <LoadImageButton name={"post"} onImageInput={handleImageChange}/>
                            <Button disabled={isLoading} type="submit">Save</Button>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
};