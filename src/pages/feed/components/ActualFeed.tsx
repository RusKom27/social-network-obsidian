
import React from "react";

import {ActualTopicList, PostCardList, Sidebar} from "../../../widgets";
import {NavTab, PageDefaultLayout, PageHeader, SideContainerElement, TabBar} from "../../../shared/ui";
import {useAppSelector} from "../../../shared/hooks";

const ActualFeed = () => {
    const user_id = useAppSelector(state => state.auth.user_id);

    return (
        <>
            <PageDefaultLayout>
                <PageHeader>
                    <div>
                        Feed
                    </div>
                    <TabBar>
                        <NavTab to={"/"}>Actual</NavTab>
                        {user_id && <NavTab to={"/follows"}>Follows</NavTab>}
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