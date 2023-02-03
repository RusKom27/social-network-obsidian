import React from "react"
import Layout from "./Layout";
import RoutesComponent from "../../routes";
import {withProviders} from "../providers";

const App = () => {
    return (
        <Layout>
            <RoutesComponent/>
        </Layout>
    );
}

export default withProviders(App)



