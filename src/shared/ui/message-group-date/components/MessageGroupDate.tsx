import React, {FC} from 'react';
import moment from "moment";

import styles from "./MessageGroupDate.module.scss";

interface PropsType {
    date: moment.Moment
}

const MessageGroupDate: FC<PropsType> = ({date}) => {
    return (
        <div className={styles.container}>
            { date.format("DD MMMM YYYY") }
        </div>
    );
};

export default MessageGroupDate;