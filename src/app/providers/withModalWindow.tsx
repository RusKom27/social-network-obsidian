import React from "react";

import {ModalWindowProvider} from "../../shared/lib/contexts";

export const withModalWindow = (Component: any) => () =>
    <ModalWindowProvider><Component/></ModalWindowProvider>;