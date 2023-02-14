
import React from "react";

import {PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout} from "../../../shared/ui";

const Feed = () => {
    return (
        <>
            <PageDefaultLayout header={"Home"}>
                <PostCardList/>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Feed;