
import React from "react";

import {MessageInputBar, Sidebar} from "../../../widgets";
import {MessagePageLayout, PageDefaultLayout, PageHeader} from "../../../shared/ui";
import {MessageCardList} from "../../../widgets/message-card-list";

const Messages = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Messages</PageHeader>
                <MessagePageLayout>
                    <MessageCardList/>
                    <MessageInputBar/>
                </MessagePageLayout>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Messages;