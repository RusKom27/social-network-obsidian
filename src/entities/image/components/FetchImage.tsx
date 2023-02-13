import React, {memo} from 'react';
import {imageApi} from "../../../shared/api";
import {EmptyImage} from "../../../shared/ui";

interface PropsType {
    src: string
    type: "default" | "avatar"
}

export const FetchImage = memo<PropsType>(({src, type}) => {
    const {data: image} = imageApi.useFetchImageQuery(src)
    if (!image) return <EmptyImage type={type}/>

    return (
        <img src={image.src} alt=""/>
    )
})