
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout, PageHeader} from "../../../shared/ui";


const Notifications = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Notifications</PageHeader>
                <div>Notifications</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Notifications;