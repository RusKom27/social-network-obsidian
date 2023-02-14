
import React from "react";

import styles from "./MessageInputBar.module.scss";
import {CreateMessageForm} from "../../../features";
import {Icon} from "../../../shared/ui";


export const MessageInputBar = () => {
    return (
        <div className={styles.container}>
            <div>
                <CreateMessageForm/>
                <Icon type={"Send"} size={2}/>
            </div>
        </div>
    );
};