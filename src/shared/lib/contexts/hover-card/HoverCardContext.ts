import {createContext, ReactNode} from "react";

export interface HoverCardProps {
    children?: ReactNode | ReactNode[] | string
    targetElement?: HTMLElement | null,
    position?: "absolute" | "fixed",
    align?: "top" | "same"
}

export const HoverCardContext = createContext({
    openHoverCard: (hoverCardProps: HoverCardProps):void => {return;},
    closeHoverCard: () => {return;},
});