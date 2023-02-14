import {useAppSelector} from "./useAppSelector";

export const useAuth = () => {
    const authData = useAppSelector(state => state.auth);
    const isAuth = authData.user_id && authData.access_token;

    return {
        isAuth,
    };
};