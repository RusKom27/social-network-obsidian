
import React, {FC, ReactNode} from 'react';

import styles from "./MessagePageLayout.module.scss";
import {Icon} from "../../index";
import {Size} from "../../../lib/types";

interface PropsType {
    children: [ReactNode, ReactNode]
}

const MessagePageLayout: FC<PropsType> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default MessagePageLayout;