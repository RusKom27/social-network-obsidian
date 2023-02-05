import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {queryWithAuth} from "../interceptors";
import {ISearchResult} from "../models";


export const searchApi = createApi({
    reducerPath: "searchAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['Results'],
    endpoints: (build) => ({
        searchByUserInput: build.mutation<ISearchResult, string>({
            query: (user_input) => ({
                url: `/?user_input=${user_input.trim()}`,
            }),
            async onCacheEntryAdded(arg, {cacheDataLoaded, dispatch}) {
                // const cacheData = await cacheDataLoaded
                // dispatch(setSearchResults(cacheData.data))
            },
            transformErrorResponse (baseQueryReturnValue, meta, arg) {
                console.log({baseQueryReturnValue})
            }
        }),
    })
})