import React, {FC} from 'react';

import styles from "./ProfileNavbar.module.scss"
import {NavTab} from "../../../shared/ui";

interface PropsType {
}

const ProfileNavbar: FC<PropsType> = () => {
    return (
        <div className={styles.container}>
            <NavTab to={" "}>Posts</NavTab>
            <NavTab to={"likes"}>Likes</NavTab>
        </div>
    )
}

export default ProfileNavbar;