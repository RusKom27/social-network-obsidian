import { Provider } from "react-redux";
// I don't like that we pass store here but whatever
import React from "react";

import {setupStore} from "../store";

export const withStore = (Component: any) => () => {
    const store = setupStore();

    return <Provider store={store}><Component/></Provider>;
};
