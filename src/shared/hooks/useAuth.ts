import {useAppSelector} from "./useAppSelector";
import {useEffect} from "react";

export const useAuth = () => {
    const authData = useAppSelector(state => state.auth)
    const isAuth = authData.user_id && authData.access_token

    useEffect(() => {

    }, [authData])

    return {
        isAuth
    }
}