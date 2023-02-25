import {useEffect} from "react";

import {useAppSelector} from "./useAppSelector";

export const useAuth = () => {
    const authData = useAppSelector(state => state.auth);
    return authData.user_id && authData.access_token;
};