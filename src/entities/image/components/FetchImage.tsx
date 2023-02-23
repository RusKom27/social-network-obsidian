import React, {memo} from 'react';

import {config} from "../../../shared/config";

interface PropsType {
    src: string
}

export const FetchImage = memo<PropsType>(({src}) => {
    return (
        <img src={`${config.server_url}/api/image/${src}`} alt=""/>
    );
});