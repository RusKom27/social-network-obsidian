import React, {lazy} from "react"
import {Route, Routes} from "react-router-dom";

const Feed = lazy(() => import("../pages").then(({Feed}) => ({default: Feed})))
const Messages = lazy(() => import("../pages").then(({Messages}) => ({default: Messages})))
const NotFoundPage = lazy(() => import("../pages").then(({NotFoundPage}) => ({default: NotFoundPage})))
const Notifications = lazy(() => import("../pages").then(({Notifications}) => ({default: Notifications})))
const Profile = lazy(() => import("../pages").then(({Profile}) => ({default: Profile})))

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Feed/>}/>
            <Route path={"/messages"} element={<Messages/>}/>
            <Route path={"/notifications"} element={<Notifications/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
)}

export default RoutesComponents