
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout, PageHeader} from "../../../shared/ui";
import {EditUserForm, LoginForm} from "../../../features";


const Settings = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Settings</PageHeader>
                <EditUserForm/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Settings;