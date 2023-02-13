import {FC, useEffect, useRef} from "react";
import {messageApi, userApi} from "../../../shared/api";

import styles from "./Message.module.scss"
import {Loader} from "../../../shared/ui";

interface PropsType {
    message_id: string
}

export const MessageText: FC<PropsType> = ({message_id}) => {
    const {data: message} = messageApi.useFetchMessageQuery(message_id)

    const textRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerHTML = message ? message.text.replace(/\n\r?/g, '<br />') : ""
        }
    }, [message, textRef])

    if (!message) return <Loader />

    return (
        <span ref={textRef}></span>
    )
}