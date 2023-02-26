import React from "react";

import {Sidebar} from "../../../widgets";
import {PageDefaultLayout, PageHeader} from "../../../shared/ui";
import {DialogCardList} from "../../../widgets/dialog-card-list";

const DialogList = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>Messages</PageHeader>
                <DialogCardList/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default DialogList;