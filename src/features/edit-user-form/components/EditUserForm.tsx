import React, {useState} from "react";
import {Field, Formik} from "formik";
import * as Yup from "yup";

import {Button, Image, Loader, TextInputField} from "../../../shared/ui";
import {imageApi, userApi} from "../../../shared/api";
import styles from "./EditUserForm.module.scss";
import {useAppSelector} from "../../../shared/hooks";
import {LoadImageButton} from "../../load-image-button";
import { FetchImage } from "../../../entities/image";


export const EditUserForm = () => {
    const user_id = useAppSelector(state => state.auth.user_id);
    const {data: user} = userApi.useFetchUserByIdQuery(user_id);
    const [updateUser, {isSuccess}] = userApi.useUpdateUserMutation();
    const [loadImage] = imageApi.useLoadImageMutation();
    const [avatarImage, setAvatarImage] = useState<File | null | undefined>(null);
    const [profileImage, setProfileImage] = useState<File | null | undefined>(null);

    const handleAvatarImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAvatarImage(event.target.files?.item(0));

    };
    const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfileImage(event.target.files?.item(0));
    };

    if (!user) return <Loader/>;

    return (
        <Formik
            initialValues={{name: user.name, login: user.login, password: "" }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                login: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                if (avatarImage) loadImage(avatarImage);
                if (profileImage) loadImage(profileImage);
                updateUser({
                    images: {
                        avatar_image: {
                            small: avatarImage?.name || user.images.avatar_image.small,
                        },
                        profile_image: {
                            small: profileImage?.name || user.images.profile_image.small,
                        },
                    },
                    name: values.name,
                    login: values.login,
                    password: values.password || undefined,
                });
                if (isSuccess) {
                    setSubmitting(false);
                }
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <div>
                            <Field name={"name"} type={"text"} component={TextInputField}>Name</Field>
                            <Field name={"login"} type={"text"} component={TextInputField}>Login</Field>
                            <Field name={"password"} type={"password"} component={TextInputField}>Password</Field>
                        </div>
                        <div className={styles.images}>
                            <div>
                                <Image size={3} type={"avatar"}>
                                    {avatarImage ?
                                        <img src={URL.createObjectURL(avatarImage)} alt=""/> :
                                        <FetchImage
                                            src={user.images.avatar_image.small}
                                        />
                                    }
                                </Image>
                                <LoadImageButton name={"avatar"} onImageInput={handleAvatarImageChange}/>
                            </div>
                            <div>
                                <Image size={5} type={"default"}>
                                    { profileImage ?
                                        <img src={ URL.createObjectURL(profileImage) } alt=""/> :
                                        <FetchImage
                                            src={ user.images.profile_image.small }
                                        />
                                    }
                                </Image>
                                <LoadImageButton name={"profile"} onImageInput={handleProfileImageChange}/>
                            </div>
                        </div>
                        <div>
                            <Button type="submit">Save</Button>
                            <Button type="button">Cancel</Button>
                        </div>
                    </form>
                );
            }
            }

        </Formik>
    );
};