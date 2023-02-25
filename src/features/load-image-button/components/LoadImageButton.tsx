import React, {memo, useEffect, useState} from 'react';

import {Button, Icon} from "../../../shared/ui";
import styles from "./LoadImageButton.module.scss";


interface PropsType {
    onImageInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
}

export const LoadImageButton = memo<PropsType>(({onImageInput, name}) => {
    return (
        <Button type={"button"}>
            <div>
                <label htmlFor={name}><Icon type={ "Photo" } size={ 2 }/></label>
                <input
                    style={{visibility: "hidden", position: "absolute"}}
                    onChange={ onImageInput }
                    id={name}
                    type="file"
                    accept=".png, .jpg, .jpeg"
                />
            </div>
        </Button>

    );
});