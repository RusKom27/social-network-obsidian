import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";

import {userApi} from "../../../shared/api";
import {Loader} from "../../../shared/ui";

interface PropsType {
    user_id: string
    children: string | ReactNode | ReactNode[]
}

export const UserLink: FC<PropsType> = ({user_id, children}) => {
    const {data: user} = userApi.useFetchUserByIdQuery(user_id);

    if (!user) return <Loader />;

    return (
        <Link
            to={`/profile/${user.login}/`}
        >
            {children}
        </Link>
    );
};