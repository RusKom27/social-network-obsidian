import {messageApi} from "../../../shared/api";

export const useFetchMessages = (message_ids: string[]) => {
    const messages = [];

    for (const id of message_ids) {
        const {data} = messageApi.useFetchMessageQuery(id);
        messages.push(data);
    }
    return messages;
};