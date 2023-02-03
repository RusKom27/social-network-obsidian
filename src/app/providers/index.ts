import { withModalWindow } from "./withModalWindow";
import { withRouter } from "./withRouter";
import {compose} from "redux";
import { withStore } from "./withStore";

export const withProviders = (Component: any) => compose(
    withRouter,
    withStore,
    withModalWindow
)(Component);

