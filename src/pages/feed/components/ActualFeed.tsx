
import React from "react";
import {Route, Routes} from "react-router-dom";

import {ActualTopicList, PostCardList, Sidebar} from "../../../widgets";
import {NavTab, PageDefaultLayout, PageHeader, SideContainerElement, TabBar} from "../../../shared/ui";
import {useAppSelector} from "../../../shared/hooks";

const ActualFeed = () => {

    return (
        <>
            <PageDefaultLayout>
                <PageHeader>
                    <div>
                        Feed
                    </div>
                    <TabBar>
                        <NavTab to={"/"}>Actual</NavTab>
                        <NavTab to={"/follows"}>Follows</NavTab>
                    </TabBar>
                </PageHeader>
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

export default ActualFeed;