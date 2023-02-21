import {useParams} from "react-router-dom";

import {userApi} from "../../../shared/api";

export const useFetchUserIdFromParams = () => {
    const location = useParams();
    const {data: user} = userApi.useFetchUserListQuery({login: location.login || ""});

    return user && user[0];
};