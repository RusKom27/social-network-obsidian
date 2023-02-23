import React, {useEffect, useState} from "react";

import styles from "./AuthBar.module.scss";
import {HeaderUserButton} from "../../header-user-button";
import {LinkButton} from "../../../shared/ui";
import {useAuth} from "../../../shared/hooks";


export const AuthBar = () => {
    const isAuth = useAuth();

    return (
        <div className={styles.container}>
            {isAuth && <HeaderUserButton/>}
            { !isAuth &&
                <div className={ styles.auth_buttons }>
                    <div><LinkButton to={ "/registration" }>Registration</LinkButton></div>
                    <div><LinkButton to={ "/login" }>Login</LinkButton></div>
                </div>
            }
        </div>
    );
};