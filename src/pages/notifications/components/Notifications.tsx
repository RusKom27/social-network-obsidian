import React, {FC} from "react";

import {PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";

interface PropsType {

}

const Notifications: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Notifications"}>
                <div>Notifications</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default Notifications;