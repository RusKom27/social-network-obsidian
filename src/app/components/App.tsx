import React from "react"
import Layout from "./Layout";
import RoutesComponent from "./RoutesComponent";
import {ModalWindowProvider} from "../../shared/lib/contexts";

const App = () => {
    return (
        <ModalWindowProvider>
            <Layout>
                <RoutesComponent/>
            </Layout>
        </ModalWindowProvider>
    );
}

export default App



