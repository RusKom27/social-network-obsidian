import {createApi} from "@reduxjs/toolkit/dist/query/react";
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
            providesTags: (result) => ['Image']
        }),
        // loadImage: build.mutation<{}, FormData>({
        //     query: (imageFormData) => ({
        //         url: `/upload`,
        //         method: 'POST',
        //         body: {
        //             formData: imageFormData
        //         },
        //         headers: {
        //             'Content-Type': "multipart/form-data"
        //         }
        //     }),
        //     invalidatesTags: ['Image']
        // }),
    })
})