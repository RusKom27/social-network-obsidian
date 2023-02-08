import React, {FC} from 'react';

import styles from "./DialogCard.module.scss"
import {IDialog, IPost} from "../../../shared/api/models";
import {LikePostButton} from "../../../features";
import {UserAvatar, UserLogin, UserName} from "../../../entities/user";
import {useAppSelector} from "../../../shared/hooks";


interface PropsType {
    dialog: IDialog
}

const DialogCard: FC<PropsType> = ({dialog}) => {
    const user_id = useAppSelector(state => state.auth.user_id)

    return (
        <div className={styles.container}>
            <div className={styles.side}>
                <UserAvatar size={1} user_id={
                    dialog.members_id.filter(member_id => member_id === user_id)[0]
                }/>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div>
                        {dialog.members_id.map(member_id =>
                            <UserName user_id={member_id}/>
                        ).join(", ")}
                    </div>
                    <div>
                        Options
                    </div>
                </div>
                <div className={styles.content}>
                    {/*{post.text}*/}
                </div>
            </div>
        </div>
    );
}

export default DialogCard;

