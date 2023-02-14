
import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";
import {LoginForm} from "../../../features";


const Login = () => {
    return (
        <>
            <PageDefaultLayout header={"Login"}>
                <LoginForm/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Login;