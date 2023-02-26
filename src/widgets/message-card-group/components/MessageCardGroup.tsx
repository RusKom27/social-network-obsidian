
import {useParams} from "react-router-dom";
import React, {FC, ReactNode, useEffect, useMemo} from 'react';

import {messageApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {MessageCard} from "../../message-card";
import {useFetchMessages} from "../../message-card-list/hooks/useFetchMessages";

interface PropsType {
    message_ids: string[];
}

const MessageCardGroup: FC<PropsType> = ({message_ids}) => {
    const messageComponents: ReactNode[] = [];
    //
    // for (const message of messages) {
    //     console.log(message?.text);
    // }

    // const messageComponents = useMemo(() => {
    //     return messageIdArray?.map(message_id =>
    //         <MessageCard message_id={message_id} key={message_id}/>,
    //     );
    // }, [messageIdArray]);


    return (
        <ComponentList reverse={true} borders={"none"}>
            {messageComponents}
        </ComponentList>
    );
};

export default MessageCardGroup;

