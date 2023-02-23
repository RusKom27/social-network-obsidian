import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Simulate} from "react-dom/test-utils";

import {config} from "../../config";
import Storage from "../../lib/storage";

import error = Simulate.error;

export const baseQuery = fetchBaseQuery({
    baseUrl: `${config.server_url}/api`,
    credentials: 'include',
    prepareHeaders: headers => {
        headers.append('authorization', `Bearer ${ Storage.getLocalVariable("token") }`);
        headers.append('Access-Control-Allow-Origin', config.server_url || "");
    },

});
