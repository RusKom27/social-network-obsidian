import React, {FC} from 'react';

import styles from "./EmptyImage.module.scss"
import default_image from "../../../images/png/default_small_profile_image.png"
import default_avatar_image from "../../../images/png/default_small_avatar_image.jpg"

interface PropsType {
    type: "avatar" | "default"
}

const EmptyImage: FC<PropsType> = ({type}) => {
    return (
        <img
            src={type === "default" ? default_image : default_avatar_image}
            className={styles.image}
            alt=""
        />
    )
}

export default EmptyImage;