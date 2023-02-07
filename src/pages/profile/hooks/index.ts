import {useParams} from "react-router-dom";
import {userApi} from "../../../shared/api";

export const useFetchUserFromParams = () => {
    const location = useParams()
    return userApi.useFetchUserByLoginQuery(location.login || "")
}