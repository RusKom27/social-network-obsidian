
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout, PageHeader} from "../../../shared/ui";
import {RegistrationForm} from "../../../features";

const Registration = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Registration</PageHeader>
                <RegistrationForm/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Registration;