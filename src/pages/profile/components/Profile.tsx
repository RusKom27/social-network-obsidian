
import React from "react";
import {Route, Routes} from "react-router-dom";

import {ActualTopicList, PostCardList, Sidebar, UserInfo} from "../../../widgets";
import {Loader, PageDefaultLayout, PageHeader, SideContainerElement} from "../../../shared/ui";
import {useFetchUserIdFromParams} from "../hooks";
import {UserLogin} from "../../../entities/user";


const Profile = () => {
    const user_id = useFetchUserIdFromParams();

    if (!user_id) return <Loader/>;

    return (
        <>
            <PageDefaultLayout>
                <PageHeader><UserLogin user_id={user_id}/></PageHeader>
                <UserInfo user_id={user_id}/>
                <Routes>
                    <Route path={""} element={
                        <PostCardList
                            post_request_query={{
                                author_id: user_id,
                            }}
                        />
                    }/>
                    <Route path={"likes"} element={
                        <PostCardList
                            post_request_query={{
                                likes: user_id,
                            }}
                        />
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

export default Profile;