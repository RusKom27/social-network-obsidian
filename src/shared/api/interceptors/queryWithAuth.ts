import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";

import {baseQuery} from "./baseQuery";
import Storage from "../../lib/storage";
import {AuthResponseData} from "../types";

export const queryWithAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
    > = async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        if (result.error && result.error.status === 401) {
            const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

            const refreshResultData = refreshResult.data as AuthResponseData;
            if (refreshResultData) {
                Storage.setLocalVariable('token',refreshResultData.access_token);
                Storage.setLocalVariable('user_id',refreshResultData.user_id);
                result = await baseQuery(args, api, extraOptions);
            } else {
                Storage.removeLocalVariable('token');
                Storage.removeLocalVariable('user_id');
                window.location.href = "/login";
            }
        }
        return result;
    };