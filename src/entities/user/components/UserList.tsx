import {FC} from "react";

import {userApi} from "../../../shared/api";
import {ComponentList, Loader} from "../../../shared/ui";
import {UserRequestQuery} from "../../../shared/api/types";
import {UserLink} from "./UserLink";
import {UserCard} from "../../../widgets";

export const UserList: FC<UserRequestQuery> = ({
    name="",
    login="",
    sort_by_popularity="ascending",
    subscribers="",
}) => {
    const {data: users} = userApi.useFetchUserListQuery({
        login, name, sort_by_popularity, subscribers,
    });

    if (!users) return <Loader />;

    return (
        <ComponentList>
            {users.map(user_id =>
                <UserLink key={user_id} user_id={user_id}>
                    <UserCard user_id={user_id}/>
                </UserLink>,
            )}

        </ComponentList>
    );
};