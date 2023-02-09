import React, {FC, ReactNode, useContext} from 'react';

import styles from "./HoverCard.module.scss"
import {HoverCardContext} from "../../../lib/contexts";

interface PropsType {
    children: ReactNode | ReactNode[] | string
}

const HoverCard: FC<PropsType> = ({children}) => {
    const {closeHoverCard} = useContext(HoverCardContext);

    return (
        <div className={styles.background} onClick={() => closeHoverCard() }>
            <div className={styles.container} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default HoverCard;