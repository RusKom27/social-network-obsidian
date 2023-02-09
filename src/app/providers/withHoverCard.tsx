import {HoverCardProvider} from "../../shared/lib/contexts";
import React from "react";

export const withHoverCard = (Component: any) => () =>
    <HoverCardProvider><Component/></HoverCardProvider>;