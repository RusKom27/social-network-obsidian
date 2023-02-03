import styles from "../../../app/components/Layout.module.scss";
import {HeaderUserButton} from "../../header-user-button";
import {OpenModalWindow, RegistrationForm} from "../../../features";
import React, {useState} from "react";


export const AuthBar = () => {
    const [isAuth, setAuth] = useState(false)

    return (
        <div className={styles.auth}>
            {isAuth && <HeaderUserButton/>}
            { !isAuth &&
                <OpenModalWindow title={ "Registration" } name={ "Registration" }>
                    <RegistrationForm/>
                </OpenModalWindow>
            }
            {!isAuth &&
                <OpenModalWindow title={"Login"} name={"Login"}>
                    <RegistrationForm/>
                </OpenModalWindow>
            }
        </div>
    )
}