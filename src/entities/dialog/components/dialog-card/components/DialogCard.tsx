import React, {FC} from 'react';

import styles from "./DialogCard.module.scss"
import {IDialog} from "../../../../../shared/api/models";
import {UserAvatar, UserName} from "../../../../user";
import {useAppSelector} from "../../../../../shared/hooks";
import {Link} from "react-router-dom";


interface PropsType {
    dialog: IDialog
}

const DialogCard: FC<PropsType> = ({dialog}) => {
    const user_id = useAppSelector(state => state.auth.user_id)

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
                        <UserName user_id={dialog.members_id.filter(member_id => member_id !== user_id)[0]}/>
                    </div>
                    <div>
                        Options
                    </div>
                </div>
                <div className={styles.content}>
                    {/*{post.text}*/}
                </div>
            </div>
        </Link>

    );
}

export default DialogCard;

