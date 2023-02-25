
import React from "react";
import {Route, Routes} from "react-router-dom";

import {ActualTopicList, PostCardList, Sidebar} from "../../../widgets";
import {NavTab, PageDefaultLayout, PageHeader, SideContainerElement, TabBar} from "../../../shared/ui";
import {useAppSelector} from "../../../shared/hooks";

const FollowsFeed = () => {
    const user_id = useAppSelector(state => state.auth.user_id);

    return (
        <>
            <PageDefaultLayout>
                <PageHeader>
                    <div>
                        Home
                    </div>
                    <TabBar>
                        <NavTab to={"/"}>Actual</NavTab>
                        <NavTab to={"/follows"}>Follows</NavTab>
                    </TabBar>
                </PageHeader>
                <PostCardList post_request_query={{
                    follows: user_id || "",
                }}/>
            </PageDefaultLayout>
            <Sidebar>
                <SideContainerElement title={"Actual topics"}>
                    <ActualTopicList/>
                </SideContainerElement>
            </Sidebar>
        </>
    );
};

export default FollowsFeed;