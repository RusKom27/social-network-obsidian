import React, {FC} from 'react';

import {ReactComponent as LogoSVG} from "../../../images/svg/logo.svg"

import styles from "./MainLogo.module.scss"

interface PropsType {

}

const MainLogo: FC<PropsType> = () => {
    return (
        <div className={styles.container}>
            <LogoSVG />
        </div>
    )
}

export default MainLogo;