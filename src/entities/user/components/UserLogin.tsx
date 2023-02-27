import {FC} from "react";

import styles from "./User.module.scss";
import {userApi} from "../../../shared/api";
import {Loader} from "../../../shared/ui";
import {Size} from "../../../shared/lib/types";

interface PropsType {
    user_id: string
    size?: Size
}

export const UserLogin: FC<PropsType> = ({user_id, size=2}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id);

    if (!user) return <Loader />;

    return (
        <span data-size={size} className={styles.user_login}>@{user.login}</span>
    );
};