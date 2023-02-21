import React, {ChangeEvent, useContext, useRef} from 'react';
import { Formik, Field} from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

import {SearchField} from "../../../shared/ui";
import styles from "./SearchForm.module.scss";
import {useDebounce} from "../../../shared/hooks";
import {HoverCardContext} from "../../../shared/lib/contexts";
import {UserList} from "../../../entities/user";
import {TopicList} from "../../../entities/topic";


export const SearchForm = () => {
    const navigate = useNavigate();
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext);
    const formRef = useRef(null);

    const debouncedSearch = useDebounce(
        (search_text: string) => {
            if (!search_text) return closeHoverCard();
            openHoverCard({
                children: <>
                    <UserList name={search_text}/>
                    <TopicList name={search_text}/>
                </>,
                targetElement: formRef.current,
                position: "fixed",
                vertical_align: "bottom",
                width: 300,
            });
        },
        500,
    );

    return (
        <Formik
            initialValues={{ search_input: ''}}
            validationSchema={Yup.object({
                search_input: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting }) => {
                navigate("search");
                setSubmitting(false);
            }}
        >
            {({handleSubmit}) => {
                return (
                    <form ref={formRef} className={styles.container} onSubmit={handleSubmit}>
                        <Field
                            name={"search_input"}
                            onChangeHandler={(event: ChangeEvent<HTMLInputElement>) =>
                                debouncedSearch(event.target.value)
                            }
                            component={SearchField}
                        />
                    </form>
                );
            }}
        </Formik>
    );
};