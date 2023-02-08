import React, {FC} from "react";

import {PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";
import {DialogCardList} from "../../../widgets/dialog-card-list";
import {Route, Routes} from "react-router-dom";
import {MessageCardList} from "../../../widgets/message-card-list";

interface PropsType {

}

const Messages: FC<PropsType> = () => {
    return (
        <>
            <PageDefaultLayout header={"Messages"}>
                <Routes>
                    <Route path={"/"} element={<DialogCardList/>}/>
                    <Route path={":dialog_id"} element={<MessageCardList/>}/>
                </Routes>

            </PageDefaultLayout>
            <Sidebar/>
        </>
    )
}

export default Messages;