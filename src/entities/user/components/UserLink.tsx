import {FC, ReactNode} from "react";
import {userApi} from "../../../shared/api";

import {Loader} from "../../../shared/ui";
import {Link} from "react-router-dom";

interface PropsType {
    user_id: string
    children: string | ReactNode | ReactNode[]
}

export const UserLink: FC<PropsType> = ({user_id, children}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id)

    if (!user) return <Loader />

    return (
        <Link
            to={`/profile/${user.login}/`}
        >
            {children}
        </Link>
    )
}