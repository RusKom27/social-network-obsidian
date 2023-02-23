
import {Route, Routes} from "react-router-dom";
import React from "react";

import {MessageInputBar, Sidebar} from "../../../widgets";
import {MessagePageLayout, PageDefaultLayout, PageHeader} from "../../../shared/ui";
import {DialogCardList} from "../../../widgets/dialog-card-list";
import {MessageCardList} from "../../../widgets/message-card-list";

const Messages = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Messages</PageHeader>
                <Routes>
                    <Route path={"/"} element={
                        <DialogCardList/>
                    }/>
                    <Route path={":dialog_id"} element={
                        <MessagePageLayout>
                            <MessageCardList/>
                            <MessageInputBar/>
                        </MessagePageLayout>
                    }/>
                </Routes>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Messages;