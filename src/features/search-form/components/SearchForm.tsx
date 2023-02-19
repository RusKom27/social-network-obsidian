import React, {ChangeEvent, useContext, useEffect, useRef} from 'react';
import { Formik, Field} from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

import {Button, Icon, SearchField, TextInputField} from "../../../shared/ui";
import {searchApi} from "../../../shared/api";
import styles from "./SearchForm.module.scss";
import {useDebounce} from "../../../shared/hooks";
import {DeleteMessageButton} from "../../delete-message-button";
import {HoverCardContext} from "../../../shared/lib/contexts";
import {UserName} from "../../../entities/user";


export const SearchForm = () => {
    const navigate = useNavigate();
    const [search, {data: searchResult, isSuccess, isLoading}] = searchApi.useSearchByUserInputMutation();
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext);
    const formRef = useRef(null);

    const debouncedSearch = useDebounce(
        (search_text: string) => search(search_text),
        500,
    );

    useEffect(() => {
        if (searchResult) {
            openHoverCard({
                children: <>
                    {searchResult.topics.length > 0 &&
                        searchResult.topics.map(topic => <div>{topic}</div>)}
                    {searchResult.users.length > 0 &&
                        searchResult.users.map(user => <div><UserName user_id={user._id}/></div>)}
                </>,
                targetElement: formRef.current,
                position: "fixed",
                vertical_align: "bottom",
            });
        }
    }, [searchResult]);

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