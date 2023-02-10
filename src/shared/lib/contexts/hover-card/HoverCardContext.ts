import {createContext, ReactNode} from "react";

export interface HoverCardProps {
    children?: ReactNode | ReactNode[] | string
    targetElement?: HTMLElement | null
}

export const HoverCardContext = createContext({
    openHoverCard: (props: HoverCardProps) => {},
    closeHoverCard: () => {},
})