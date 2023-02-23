import React, {memo, useEffect, useState} from 'react';

import {Button, Icon} from "../../../shared/ui";
import styles from "./LoadImageButton.module.scss";


interface PropsType {
    onImageInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const LoadImageButton = memo<PropsType>(({onImageInput}) => {

    return (
        <Button type={"button"}>
            <div>
                <label htmlFor="image"><Icon type={ "Photo" } size={ 2 }/></label>
                <input
                    style={{visibility: "hidden", position: "absolute"}}
                    onChange={ onImageInput }
                    id="image"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                />
            </div>
        </Button>

    );
});