import {createContext, ReactNode} from "react";

export interface HoverCardProps {
    children?: ReactNode | ReactNode[] | string
    targetElement?: HTMLElement | null,
    position?: "absolute" | "fixed",
    vertical_align?: "top" | "same" | "bottom"
    horizontal_align?: "left" | "center" | "right"
    width?: number
}

export const HoverCardContext = createContext({
    openHoverCard: (hoverCardProps: HoverCardProps):void => {return;},
    closeHoverCard: () => {return;},
});