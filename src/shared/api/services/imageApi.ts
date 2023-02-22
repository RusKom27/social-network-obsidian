import {createApi} from "@reduxjs/toolkit/dist/query/react";
import FormData from "form-data";

import {baseQuery} from "../interceptors";
import {IImage} from "../models";

export const imageApi = createApi({
    reducerPath: "imageAPI",
    baseQuery: baseQuery,
    tagTypes: ['Image'],
    endpoints: (build) => ({
        fetchImage: build.query<IImage, string>({
            query: (image_name) => ({
                url: `/image/${image_name}`,
            }),
            providesTags: (result) => ['Image'],
        }),
        loadImage: build.mutation<IImage, File>({
            query: (file) => {
                const formData = new FormData();
                formData.append('image', file);
                return {
                    url: `/image/upload`,
                    method: 'POST',
                    body: formData,
                };
            },
            invalidatesTags: ['Image'],
        }),
    }),
});