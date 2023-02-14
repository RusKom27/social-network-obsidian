import React from "react";
import {useLocation} from "react-router-dom";

import {PageDefaultLayout} from "../../../shared/ui";
import {Sidebar} from "../../../widgets";


const NotFoundPage = () => {
    const location = useLocation();

    return (
        <>
            <PageDefaultLayout header={"Not found"}>
                <div>Page {`"${location.pathname}"`} not found!</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default NotFoundPage;