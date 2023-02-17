
import React from "react";

import {ActualTopicList, PostCardList, Sidebar} from "../../../widgets";
import {PageDefaultLayout, SideContainerElement} from "../../../shared/ui";

const Feed = () => {
    return (
        <>
            <PageDefaultLayout header={"Home"}>
                <PostCardList post_request_query={{}}/>
            </PageDefaultLayout>
            <Sidebar>
                <SideContainerElement title={"Actual topics"}>
                    <ActualTopicList/>
                </SideContainerElement>
            </Sidebar>
        </>
    );
};

export default Feed;