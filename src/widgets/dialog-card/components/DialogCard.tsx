import {Link} from "react-router-dom";
import React, {memo} from 'react';

import styles from "./DialogCard.module.scss";
import {IDialog} from "../../../shared/api/models";
import {UserAvatar, UserLogin, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";
import {messageApi} from "../../../shared/api";
import {MessageText} from "../../../entities/message";
import {Loader} from "../../../shared/ui";


interface PropsType {
    dialog: IDialog
}

const DialogCard = memo<PropsType>(({dialog}) => {
    const user_id = useAppSelector(state => state.auth.user_id);
    const other_members_id = dialog.members_id.filter(member_id => member_id !== user_id);
    const {data: message_id_list} = messageApi.useFetchMessagesQuery(
        {dialog_id: dialog._id, query: {sort_by_relevance: "descending", limit: 1}},
    );
    if (!message_id_list) return <Loader/>;
    const last_message_id = message_id_list.at(-1)?._id;

    return (
        <Link to={`/messages/${dialog._id}`} className={styles.container}>
            <div className={styles.side}>
                <UserAvatar size={1} user_id={
                    dialog.members_id.filter(member_id => member_id !== user_id)[0]
                }/>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div>
                        <UserName user_id={other_members_id[0]}/>
                        <UserLogin user_id={other_members_id[0]}/>
                    </div>
                    <div>
                        Options
                    </div>
                </div>
                <div className={styles.content}>
                    {last_message_id && <MessageText message_id={last_message_id}/>}
                </div>
            </div>
        </Link>

    );
});

export default DialogCard;

