import {memo} from "react";

import styles from "./User.module.scss";
import {userApi} from "../../../shared/api";
import {Loader} from "../../../shared/ui";
import {Size} from "../../../shared/lib/types";

interface PropsType {
    user_id: string | undefined
    size?: Size
}

export const UserName = memo<PropsType>(({user_id, size= 3}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id || "");

    if (!user) return <Loader />;

    return (
        <span
            className={styles.user_name}
            data-size={size}
        >
            {user.name}
        </span>
    );
});