
import React from "react";
import {Route, Routes} from "react-router-dom";

import {ActualTopicList, PostCardList, Sidebar, UserInfo} from "../../../widgets";
import {Loader, PageDefaultLayout, PageHeader, SideContainerElement} from "../../../shared/ui";
import {useFetchUserFromParams} from "../hooks";


const Profile = () => {
    const {data: user} = useFetchUserFromParams();

    if (!user) return <Loader/>;

    return (
        <>
            <PageDefaultLayout>
                <PageHeader>{user.name}</PageHeader>
                <UserInfo user_id={user._id}/>
                <Routes>
                    <Route path={""} element={
                        <PostCardList
                            post_request_query={{
                                author_id: user._id,
                            }}
                        />
                    }/>
                    <Route path={"likes"} element={
                        <PostCardList
                            post_request_query={{
                                likes: user._id,
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