
import React, {FC, MouseEventHandler, useContext, useRef} from 'react';
import type * as CSS from 'csstype';

import styles from "./HoverCard.module.scss";
import {HoverCardContext} from "../../../lib/contexts";
import {HoverCardProps} from "../../../lib/contexts/hover-card/HoverCardContext";
import {useDebounce} from "../../../hooks";

const HoverCard: FC<HoverCardProps> = ({
    children,
    targetElement,
    position="absolute",
    vertical_align="same",
    horizontal_align="center",
    closeOn="clickOut",
    width= 150,
}) => {
    const {closeHoverCard} = useContext(HoverCardContext);
    const debouncedClose = useDebounce(((event) => {
        if (event.type === "mouseLeave") closeHoverCard();
    }) as MouseEventHandler<HTMLDivElement>, 500);

    const card_ref = useRef<HTMLDivElement>(null);
    if (!targetElement || !children) return null;
    const targetRect = targetElement.getClientRects().item(0);
    const itemsCount = React.isValidElement(children) && children.props.children.length;
    if (!targetRect) return null;



    const verticalAlignStyles = {
        top: {
            top:  targetRect.top - (itemsCount ? itemsCount : 1) * 50,
        },
        same: {
            top: targetRect.top,
        },
        bottom: {
            top:  targetRect.top + targetRect.height,
        },
    };

    const horizontalAlignStyles = {
        left: {
            left: targetRect.left - width,
        },
        center: {
            left: targetRect.left,
        },
        right: {
            left: targetRect.left + targetRect.width,
        },
    };

    const card_align: CSS.Properties<string | number> = {
        ...verticalAlignStyles[vertical_align],
        ...horizontalAlignStyles[horizontal_align],
        position,
        width,
    };

    const background_align: CSS.Properties<string | number> = {
        position,
        top: + window.scrollY,
    };

    return (
        <div style={background_align} className={styles.background} onClick={() => closeHoverCard() }>
            <div
                onMouseLeave={closeOn === "mouseOut" ? (debouncedClose) : () => ""}
                ref={card_ref}
                style={card_align}
                className={styles.container}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default HoverCard;