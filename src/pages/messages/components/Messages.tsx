import React, {FC} from "react";

import {PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";

interface PropsType {

}

const Messages: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Messages"}>
                <div>Messages</div>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default Messages;