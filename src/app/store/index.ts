import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authApi, dialogApi, imageApi, messageApi, postApi, topicApi, userApi} from "../../shared/api";
import slices from "../../shared/slices";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [dialogApi.reducerPath]: dialogApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [topicApi.reducerPath]: topicApi.reducer,
    ...slices,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                authApi.middleware,
                userApi.middleware,
                messageApi.middleware,
                dialogApi.middleware,
                imageApi.middleware,
                postApi.middleware,
                topicApi.middleware,
            ),
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']