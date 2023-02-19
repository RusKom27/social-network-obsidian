import React, {ChangeEvent, useContext, useEffect} from 'react';
import { Formik, Field} from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

import {Button, Icon, SearchField, TextInputField} from "../../../shared/ui";
import {searchApi} from "../../../shared/api";
import styles from "./SearchForm.module.scss";
import {useDebounce} from "../../../shared/hooks";
import {DeleteMessageButton} from "../../delete-message-button";
import {HoverCardContext} from "../../../shared/lib/contexts";


export const SearchForm = () => {
    const navigate = useNavigate();
    const [search, {data: searchResult, isSuccess, isLoading}] = searchApi.useSearchByUserInputMutation();
    const {openHoverCard, closeHoverCard} = useContext(HoverCardContext);

    const debouncedSearch = useDebounce(
        (search_text: string) => search(search_text),
        500,
    );

    useEffect(() => {
        // openHoverCard({
        //     children: <>
        //         { message.sender_id === user_id &&
        //             <DeleteMessageButton
        //                 size={ 1 }
        //                 border={ false }
        //                 onSubmit={ () => closeHoverCard() }
        //                 message_id={ message_id }/>
        //         }
        //     </>,
        //     targetElement: optionRef.current,
        //     position: "absolute",
        //     align: "same",
        // });

        console.log(searchResult);
    }, [searchResult]);

    useEffect(() => {
        if (isSuccess) navigate(`/`);
    }, [isSuccess, navigate]);

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
                    <form className={styles.container} onSubmit={handleSubmit}>
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