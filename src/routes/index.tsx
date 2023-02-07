import React, {lazy} from "react"
import {Route, Routes} from "react-router-dom";
import {Login, NotFoundPage, Registration} from "../pages";

const Feed = lazy(() => import("../pages").then(({Feed}) => ({default: Feed})))
const Messages = lazy(() => import("../pages").then(({Messages}) => ({default: Messages})))
const Notifications = lazy(() => import("../pages").then(({Notifications}) => ({default: Notifications})))
const Profile = lazy(() => import("../pages").then(({Profile}) => ({default: Profile})))

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Feed/>}/>
            <Route path={"/messages"} element={<Messages/>}/>
            <Route path={"/notifications"} element={<Notifications/>}/>
            <Route path={"/profile/:login"} element={<Profile/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registration"} element={<Registration/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
)}

export default RoutesComponents