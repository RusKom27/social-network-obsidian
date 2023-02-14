import React from "react";

import {HoverCardProvider} from "../../shared/lib/contexts";

export const withHoverCard = (Component: any) => () =>
    <HoverCardProvider><Component/></HoverCardProvider>;