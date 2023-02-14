import {compose} from "redux";

import { withModalWindow } from "./withModalWindow";
import { withRouter } from "./withRouter";
import { withStore } from "./withStore";
import {withHoverCard} from "./withHoverCard";

export const withProviders = (Component: any) => compose(
    withRouter,
    withStore,
    withModalWindow,
    withHoverCard,
)(Component);

