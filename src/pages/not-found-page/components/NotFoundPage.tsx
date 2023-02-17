import React from "react";
import {useLocation} from "react-router-dom";

import {PageDefaultLayout, PageHeader} from "../../../shared/ui";
import {Sidebar} from "../../../widgets";


const NotFoundPage = () => {
    const location = useLocation();

    return (
        <>
            <PageDefaultLayout>
                <PageHeader>{location.pathname}</PageHeader>
                <div>Page {`"${location.pathname}"`} not found!</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default NotFoundPage;