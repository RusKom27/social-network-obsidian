import {FC, ReactNode, useState} from "react";

import {HoverCardContext, HoverCardProps} from "./HoverCardContext";
import {HoverCard} from "../../../ui";

interface PropsType {
    children: ReactNode | ReactNode[]
}

export const HoverCardProvider: FC<PropsType> = ({children}) => {
    const [isHoverCardOpened, setHoverCardOpened] = useState(false);
    const [hoverCardContent, setHoverCardContent] = useState<HoverCardProps | null>(null);

    const openHoverCard = (hoverCardProps: HoverCardProps) => {
        setHoverCardContent(hoverCardProps);
        setHoverCardOpened(!isHoverCardOpened);
    };

    const closeHoverCard = () => {
        setHoverCardOpened(false);
    };

    return (
        <HoverCardContext.Provider value={{openHoverCard, closeHoverCard}}>
            {children}
            {isHoverCardOpened &&
                <HoverCard {...hoverCardContent}>
                    {hoverCardContent?.children}
                </HoverCard>
            }
        </HoverCardContext.Provider>
    );
};