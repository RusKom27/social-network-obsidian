import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authApi, imageApi, postApi, searchApi, userApi} from "../../shared/api";
import slices from "../../shared/slices"

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    ...slices
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                authApi.middleware,
                userApi.middleware,
                imageApi.middleware,
                searchApi.middleware,
                postApi.middleware
            )
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']