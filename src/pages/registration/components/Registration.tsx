import React, {FC} from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";
import {RegistrationForm} from "../../../features";

interface PropsType {

}

const Registration: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Registration"}>
                <RegistrationForm/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default Registration;