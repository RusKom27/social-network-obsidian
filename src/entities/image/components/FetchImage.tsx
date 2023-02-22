import React, {memo} from 'react';

import {imageApi} from "../../../shared/api";
import {EmptyImage} from "../../../shared/ui";
import {config} from "../../../shared/config";

interface PropsType {
    src: string
    type: "default" | "avatar"
}

export const FetchImage = memo<PropsType>(({src, type}) => {
    // const {data: image} = imageApi.useFetchImageQuery(src);
    // if (!image) return <EmptyImage type={type}/>;
    return (
        <img src={`${config.server_url}/api/image/${src}`} alt=""/>
    );
});