import {createApi} from "@reduxjs/toolkit/dist/query/react";

import Storage from "../../lib/storage";
import {baseQuery} from "../interceptors";
import {removeAuthData, setAuthData} from "../../slices/auth";

export const authApi = createApi({
    reducerPath: "authAPI",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        login: build.mutation<
            {access_token: string, user_id: string},
            {email: string, password: string}
            >({
                query: ({email, password}) => ({
                    url: `/auth/login`,
                    method: 'POST',
                    body: {
                        email,
                        password,
                    },
                }),
                async onCacheEntryAdded(arg, {cacheDataLoaded, dispatch}) {
                    const cacheData = await cacheDataLoaded;
                    const {data:{access_token, user_id}} = cacheData;
                    Storage.setLocalVariable('token', access_token);
                    Storage.setLocalVariable('user_id', user_id);
                    dispatch(setAuthData({access_token, user_id}));
                },
            }),
        registration: build.mutation<
            {access_token: string, user_id: string},
            {name: string, login: string, email: string, password: string}
            >({
                query: ({name, login, email, password}) => ({
                    url: `/auth/registration`,
                    method: 'POST',
                    body: {
                        name,
                        login,
                        email,
                        password,
                    },
                }),
                async onCacheEntryAdded(arg, {cacheDataLoaded, dispatch}) {
                    const cacheData = await cacheDataLoaded;
                    const {data:{access_token, user_id}} = cacheData;
                    Storage.setLocalVariable('token', access_token);
                    Storage.setLocalVariable('user_id', user_id);
                    dispatch(setAuthData({access_token, user_id}));
                },
            }),
        logout: build.mutation<string, string>({
            query: () => ({
                url: `/auth/logout`,
                method: 'POST',
            }),
            async onCacheEntryAdded(arg, {dispatch}) {
                Storage.removeLocalVariable('token');
                Storage.removeLocalVariable('user_id');
                dispatch(removeAuthData());
            },
        }),
    }),
});