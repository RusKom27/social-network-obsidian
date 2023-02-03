import {ModalWindowProvider} from "../../shared/lib/contexts";
import React from "react";

export const withModalWindow = (Component: any) => () =>
    <ModalWindowProvider><Component/></ModalWindowProvider>;