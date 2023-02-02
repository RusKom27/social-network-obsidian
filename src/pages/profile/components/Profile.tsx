import React, {FC} from "react";

import {PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";

interface PropsType {

}

const Profile: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Profile"}>
                <div>Profile</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default Profile;