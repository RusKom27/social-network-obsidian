import {FC} from "react";
import {userApi} from "../../../shared/api";

import styles from "./User.module.scss"

interface PropsType {
    user_id: string
}

export const UserLogin: FC<PropsType> = ({user_id}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id)

    if (!user) return <div>Loading</div>

    return (
        <span className={styles.user_login}>@{user.login}</span>
    )
}