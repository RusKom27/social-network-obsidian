import React, {lazy} from "react";
import {Route, Routes} from "react-router-dom";

import {ActualFeed, FollowsFeed, Login, NotFoundPage, Registration} from "../pages";
import {PostCardList} from "../widgets";
import {useAppSelector} from "../shared/hooks";
import {Settings} from "../pages/settings";

const Feed = lazy(() => import("../pages").then(({FollowsFeed}) => ({default: FollowsFeed})));
const Messages = lazy(() => import("../pages").then(({Messages}) => ({default: Messages})));
const Notifications = lazy(() => import("../pages").then(({Notifications}) => ({default: Notifications})));
const Profile = lazy(() => import("../pages").then(({Profile}) => ({default: Profile})));

const RoutesComponents = () => {
    const user_id = useAppSelector(state => state.auth.user_id);

    return (
        <Routes>
            <Route path={"/"} element={<ActualFeed/>}/>
            {user_id && <Route path={"follows"} element={<FollowsFeed/>}/>}
            {user_id && <Route path={"/messages/*"} element={<Messages/>}/>}
            {user_id && <Route path={"/notifications"} element={<Notifications/>}/>}
            {user_id && <Route path={"/settings"} element={<Settings/>}/>}
            <Route path={"/profile/:login/*"} element={<Profile/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registration"} element={<Registration/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    );};

export default RoutesComponents;