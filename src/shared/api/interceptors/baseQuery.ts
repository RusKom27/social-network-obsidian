import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

import {config} from "../../config/config";
import Storage from "../../lib/storage";

export const baseQuery = fetchBaseQuery({
    baseUrl: `${config.server_url}/api`,
    credentials: 'include',
    prepareHeaders: headers => {
        headers.append('authorization', `Bearer ${ Storage.getLocalVariable("token") }`);
        headers.append('Access-Control-Allow-Origin', config.server_url || "");
    },
});
