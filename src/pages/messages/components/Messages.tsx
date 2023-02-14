
import {Route, Routes} from "react-router-dom";
import React from "react";

import {MessageInputBar, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";
import {DialogCardList} from "../../../widgets/dialog-card-list";
import {MessageCardList} from "../../../widgets/message-card-list";

const Messages = () => {
    return (
        <>
            <PageDefaultLayout header={"Messages"}>
                <Routes>
                    <Route path={"/"} element={<DialogCardList/>}/>
                    <Route path={":dialog_id"} element={
                        <>
                            <MessageCardList/>
                            <MessageInputBar/>
                        </>
                    }/>
                </Routes>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Messages;