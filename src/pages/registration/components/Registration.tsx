
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";
import {RegistrationForm} from "../../../features";

const Registration = () => {
    return (
        <>
            <PageDefaultLayout header={"Registration"}>
                <RegistrationForm/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Registration;