import React, {FC, useEffect, useRef, useState} from "react";
import {Field, Formik} from "formik";
import * as Yup from "yup";

import {Button, Icon, Image, Loader, TextAreaField} from "../../../shared/ui";
import {imageApi, messageApi} from "../../../shared/api";
import styles from "./EditMessageForm.module.scss";
import {LoadImageButton} from "../../load-image-button";

interface PropsType {
    message_id: string
    onSuccess?: () => void
}

export const EditMessageForm: FC<PropsType> = ({onSuccess, message_id}) => {
    const [updateMessage, {isSuccess, isLoading}] = messageApi.useUpdateMessageMutation();
    const [loadImage] = imageApi.useLoadImageMutation();
    const {data: message} = messageApi.useFetchMessageQuery(message_id);
    const ref = useRef<HTMLFormElement>(null);
    const [file, setFile] = useState<File | null | undefined>(null);

    const submitOnEnter = (event: KeyboardEvent) => {
        if (event.key === "Enter" && ref.current && !event.shiftKey) {
            event.preventDefault();
            ref.current.requestSubmit();
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files?.item(0));
    };

    useEffect(() => {
        if (isSuccess && onSuccess) onSuccess();
    }, [onSuccess, isSuccess]);

    if (!message) return <Loader/>;

    return (
        <Formik
            initialValues={{message_text: message.text, message_image: message.image}}
            validationSchema={Yup.object({
                message_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                updateMessage({
                    _id: message._id,
                    text: values.message_text || message.text,
                    image: file ? file.name : message.image,
                });
                if (file) {
                    loadImage(file);
                    setFile(null);
                }
                resetForm();
                setSubmitting(false);
            }}
        >
            {({handleSubmit}) => {
                return (
                    <>
                        <form ref={ref} className={styles.container} onSubmit={handleSubmit}>
                            {file && <div className={styles.image_preview}>
                                <div onClick={() => setFile(null)}>
                                    <Image size={3}>
                                        <img src={URL.createObjectURL(file)} alt=""/>
                                    </Image>
                                    <div>
                                        <Icon type={"Cross"} size={3}/>
                                    </div>
                                </div>
                            </div>}
                            <div>
                                <LoadImageButton name={"message_edit"} onImageInput={handleImageChange}/>
                                <Field
                                    onKeyDown={submitOnEnter}
                                    max_height={100}
                                    type={"MessageInput"}
                                    name={"message_text"}
                                    component={TextAreaField}
                                />
                                <Button disabled={isLoading} type="submit">
                                    <Icon type={"Send"} size={2}/>
                                </Button>
                            </div>
                        </form>
                    </>
                );
            }}
        </Formik>
    );
};