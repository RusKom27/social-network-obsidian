import React, {FC, useState} from 'react';
import {imageApi} from "../../../shared/api";

interface PropsType {
    src: string
}

export const FetchImage: FC<PropsType> = ({src}) => {
    const {data: image} = imageApi.useFetchImageQuery(src)

    if (!image) return <div>Loading</div>

    return (
        <img src={image.src} alt=""/>
    )
}