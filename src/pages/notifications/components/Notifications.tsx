
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";


const Notifications = () => {
    return (
        <>
            <PageDefaultLayout header={"Notifications"}>
                <div>Notifications</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Notifications;