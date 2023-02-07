import React, {FC, useState} from 'react';
import {imageApi} from "../../../shared/api";
import {EmptyImage, Loader} from "../../../shared/ui";

interface PropsType {
    src: string
}

export const FetchImage: FC<PropsType> = ({src}) => {
    const {data: image} = imageApi.useFetchImageQuery(src)

    if (!image) return <EmptyImage/>

    return (
        <img src={image.src} alt=""/>
    )
}