import React, {FC} from "react";

import {PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";
import {LoginForm} from "../../../features";

interface PropsType {

}

const Login: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Login"}>
                <LoginForm/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default Login;