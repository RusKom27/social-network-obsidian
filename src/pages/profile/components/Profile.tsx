
import React from "react";
import {Route, Routes} from "react-router-dom";

import {PostCardList, Sidebar, UserInfo} from "../../../widgets";
import {Loader, PageDefaultLayout} from "../../../shared/ui";
import {useFetchUserFromParams} from "../hooks";


const Profile = () => {
    const {data: user} = useFetchUserFromParams();

    if (!user) return <Loader/>;

    return (
        <>
            <PageDefaultLayout header={user.name}>
                <UserInfo user_id={user._id}/>
                <Routes>
                    <Route path={""} element={<PostCardList query={user.login}/>}/>
                    <Route path={"likes"} element={<PostCardList/>}/>
                </Routes>
            </PageDefaultLayout>
            <Sidebar/>
        </>
    );
};

export default Profile;