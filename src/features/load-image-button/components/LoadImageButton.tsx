import React, {memo, useEffect, useState} from 'react';


interface PropsType {
    onImageInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const LoadImageButton = memo<PropsType>(({onImageInput}) => {

    return (
        <input onChange={onImageInput} type="file" accept=".png, .jpg, .jpeg"/>
    );
});