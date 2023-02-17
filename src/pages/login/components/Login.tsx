
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout, PageHeader} from "../../../shared/ui";
import {LoginForm} from "../../../features";


const Login = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Login</PageHeader>
                <LoginForm/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Login;