import {FC, useEffect, useRef} from "react";

import {messageApi} from "../../../shared/api";
import {DateText, Loader} from "../../../shared/ui";
import styles from "./Message.module.scss";

interface PropsType {
    message_id: string
}

export const MessageCreationDate: FC<PropsType> = ({message_id}) => {
    const {data: message} = messageApi.useFetchMessageQuery(message_id);

    if (!message) return <Loader />;

    return (
        <span className={styles.message_creation_date}>
            <DateText
                withoutSuffix={false}
                fromNow={false}
                showOnlyTime={true}
                date={message.updatedAt}
            />
            <span>{message.createdAt?.toString() !== message.updatedAt?.toString() && "edited"}</span>
        </span>

    );
};