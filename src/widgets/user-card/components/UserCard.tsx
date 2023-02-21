import React, {memo} from 'react';

import styles from "./UserCard.module.scss";
import {LikePostButton, OpenPostOptionsButton} from "../../../features";
import {UserAvatar, UserLink, UserLogin, UserName} from "../../../entities/user";
import {Loader} from "../../../shared/ui";
import {userApi} from "../../../shared/api";

interface PropsType {
    user_id: string
}

const UserCard = memo<PropsType>(({user_id}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id);
    if (!user) return <Loader/>;

    return (
        <div className={styles.container}>
            <UserLink user_id={user_id}>
                <div className={styles.side}>
                    <UserAvatar size={1} user_id={user_id}/>
                </div>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div>
                            <UserName user_id={user_id}/>
                            <UserLogin user_id={user_id}/>
                        </div>
                        <div>
                            {/*<OpenPostOptionsButton post_id={user_id}/>*/}
                        </div>
                    </div>
                    <div className={styles.content}>
                        followers: {user.subscribers.length}
                    </div>
                    <div className={styles.footer}>

                    </div>
                </div>
            </UserLink>
        </div>
    );
});

export default UserCard;

