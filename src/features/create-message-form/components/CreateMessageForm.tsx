import React, {FC, useEffect, useRef, useState} from "react";
import {Field, Formik} from "formik";
import * as Yup from "yup";
import {useParams} from "react-router-dom";

import {Icon, Image, Loader, TextAreaField} from "../../../shared/ui";
import {imageApi, messageApi} from "../../../shared/api";
import styles from "./CreateMessageForm.module.scss";
import {LoadImageButton} from "../../load-image-button";
import {FetchImage} from "../../../entities/image";

interface PropsType {
    onSuccess?: () => void
}

export const CreateMessageForm: FC<PropsType> = ({onSuccess}) => {
    const [createMessage, {isSuccess}] = messageApi.useCreateMessageMutation();
    const [loadImage] = imageApi.useLoadImageMutation();
    const dialog_id = useParams().dialog_id;
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
        if (isSuccess && onSuccess) {
            onSuccess();
        }
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, [isSuccess, onSuccess]);

    if (!dialog_id) return <Loader/>;

    return (
        <Formik
            initialValues={{message_text: ''}}
            validationSchema={Yup.object({
                message_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                createMessage({
                    dialog_id,
                    text: values.message_text,
                    image: file ? file.name : "",
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
                                        <FetchImage src={file.name}/>
                                    </Image>
                                    <div>
                                        <Icon type={"ThreeDots"} size={3}/>
                                    </div>
                                </div>
                            </div>}
                            <div>
                                <LoadImageButton onImageInput={handleImageChange}/>
                                <Field
                                    onKeyDown={submitOnEnter}
                                    max_height={100}
                                    type={"MessageInput"}
                                    name={"message_text"}
                                    component={TextAreaField}
                                />
                                <input hidden type="submit" tabIndex={-1}/>
                                <Icon type={"Send"} size={2}/>
                            </div>
                        </form>
                    </>

                );
            }}
        </Formik>
    );
};