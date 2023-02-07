import React, {FC} from 'react';

import styles from "./Loader.module.scss"
import {Icon} from "../../index";
import {Size} from "../../../lib/types";

interface PropsType {
    size?: Size
}

const Loader: FC<PropsType> = ({size= 3}) => {
    return (
        <div className={styles.container}>
            <Icon type={"Loader"} size={size}/>
        </div>
    )
}

export default Loader;