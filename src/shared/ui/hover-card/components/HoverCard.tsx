import React, {createRef, FC, useContext, useEffect, useRef} from 'react';
import type * as CSS from 'csstype';

import styles from "./HoverCard.module.scss"
import {HoverCardContext} from "../../../lib/contexts";
import {HoverCardProps} from "../../../lib/contexts/hover-card/HoverCardContext";
import {ReactComponent} from "*.svg";


const HoverCard: FC<HoverCardProps> = ({children, targetElement, position, align}) => {
    const {closeHoverCard} = useContext(HoverCardContext);
    const card_ref = useRef<HTMLDivElement>(null)
    if (!targetElement || !position || !align || !children) return null
    const targetRect = targetElement.getClientRects().item(0)
    const cardRect = card_ref.current?.getClientRects().item(0)
    const itemsCount = React.isValidElement(children) && children.props.children.length
    if (!targetRect) return null

    const alignStyles = {
        "top": {
            top:  targetRect.top - (itemsCount ? itemsCount : 1) * 50,
            left: targetRect.left,
        },
        "same": {
            top: targetRect.top,
            left: targetRect.left,
        }
    }
    const card_align: CSS.Properties<string | number> = {
        ...alignStyles[align],
        position
    }

    const background_align: CSS.Properties<string | number> = {
        position: position,
        top: + window.scrollY,
    }

    return (
        <div style={background_align} className={styles.background} onClick={() => closeHoverCard() }>
            <div
                ref={card_ref}
                style={card_align}
                className={styles.container}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default HoverCard;