import {createSlice} from "@reduxjs/toolkit";

import Storage from "../lib/storage";

interface State {
    user_id: string | null,
    access_token: string | null,
}

const initialState: State = {
    user_id: Storage.getLocalVariable("user_id"),
    access_token: Storage.getLocalVariable("token"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthData(state, action) {
            state.access_token = action.payload.access_token;
            state.user_id = action.payload.user_id;
        },
        removeAuthData(state) {
            state.access_token = null;
            state.user_id = null;
        },
    },
});

export default authSlice.reducer;
export const {
    setAuthData,
    removeAuthData,
} = authSlice.actions;