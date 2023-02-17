
import React from 'react';

import styles from "./FeedNavbar.module.scss";
import {NavTab} from "../../../shared/ui";

const ProfileNavbar = () => {
    return (
        <div className={styles.container}>
            <NavTab to={" "}>Posts</NavTab>
            <NavTab to={"likes"}>Likes</NavTab>
        </div>
    );
};

export default ProfileNavbar;