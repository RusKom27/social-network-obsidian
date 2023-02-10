import React, {FC, StyleHTMLAttributes, useContext, useEffect, useRef} from 'react';
import type * as CSS from 'csstype';

import styles from "./HoverCard.module.scss"
import {HoverCardContext} from "../../../lib/contexts";
import {HoverCardProps} from "../../../lib/contexts/hover-card/HoverCardContext";


const HoverCard: FC<HoverCardProps> = ({children, targetElement}) => {
    const {closeHoverCard} = useContext(HoverCardContext);
    const ref = useRef<HTMLDivElement>(null)
    const targetRect = targetElement?.getClientRects().item(0)
    let rect: CSS.Properties<string | number> | null = (targetElement && targetRect) ? {
        top: targetRect?.top - targetRect.height - 20,
        left: targetRect?.left,
        position: targetElement.style.position === "absolute" ? "absolute" : "fixed"
    } : null


    return (
        <div className={styles.background} onClick={() => closeHoverCard() }>
            <div
                style={rect ? rect : undefined}
                className={styles.container}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default HoverCard;