import {FC} from "react";

import styles from "./User.module.scss";
import {userApi} from "../../../shared/api";
import {Loader} from "../../../shared/ui";

interface PropsType {
    user_id: string
}

export const UserFollowInfo: FC<PropsType> = ({user_id}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id);

    if (!user) return <Loader />;

    return (
        <div className={styles.follow_info}>
            <span className={styles.subscribers_count}>{user.subscribers.length} </span><span>followers</span>
        </div>
    );
};