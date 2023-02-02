import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {baseQuery} from "../interceptors";
import Storage from "../../lib/storage";

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
                    password
                }
            }),
            async onCacheEntryAdded(arg, {cacheDataLoaded}) {
                const cacheData = await cacheDataLoaded
                Storage.setLocalVariable('token', cacheData.data.access_token)
                Storage.setLocalVariable('user_id', cacheData.data.user_id)
            }
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
                    password
                }
            }),
            async onCacheEntryAdded(arg, {cacheDataLoaded, dispatch}) {
                const cacheData = await cacheDataLoaded
                Storage.setLocalVariable('token', cacheData.data.access_token)
                Storage.setLocalVariable('user_id', cacheData.data.user_id)
            }
        }),
        logout: build.mutation({
            query: () => ({
                url: `/auth/logout`,
                method: 'POST'
            }),
            async onCacheEntryAdded() {
                Storage.removeLocalVariable('token')
                Storage.removeLocalVariable('user_id')
            }
        }),
    })
})