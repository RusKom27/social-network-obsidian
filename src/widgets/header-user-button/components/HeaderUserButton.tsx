import React, {FC} from 'react';

import styles from "./HeaderUserButton.module.scss"
import {Button} from "../../../shared/ui";

interface PropsType {

}

const HeaderUserButton: FC<PropsType> = () => {
    return (
        <Button>
            <div className={styles.container}>
                <div>
                    User Photo
                </div>
                <div>
                    User Info
                </div>
            </div>
        </Button>
    );
}

export default HeaderUserButton;

