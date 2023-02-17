
import React from "react";
import {Route, Routes} from "react-router-dom";

import {ActualTopicList, PostCardList, Sidebar} from "../../../widgets";
import {NavTab, PageDefaultLayout, PageHeader, SideContainerElement, TabBar} from "../../../shared/ui";

const Feed = () => {
    return (
        <>
            <PageDefaultLayout>
                <PageHeader>
                    <div>
                        Home
                    </div>
                    <TabBar>
                        <NavTab to={" "}>Actual</NavTab>
                        <NavTab to={"follows"}>Follows</NavTab>
                    </TabBar>
                </PageHeader>
                <Routes>
                    <Route path={""} element={
                        <PostCardList post_request_query={{}}/>
                    }/>
                    <Route path={"follows"} element={
                        <PostCardList post_request_query={{}}/>
                    }/>
                </Routes>

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