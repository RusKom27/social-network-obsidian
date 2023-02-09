import {createContext, ReactNode} from "react";

export interface HoverCardProps {
    children?: ReactNode | ReactNode[] | string
}

export const HoverCardContext = createContext({
    openHoverCard: (props: HoverCardProps) => {},
    closeHoverCard: () => {},
})