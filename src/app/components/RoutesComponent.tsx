import React from "react"
import {Route, Routes} from "react-router-dom";
import {Feed, Messages, NotFoundPage, Notifications, Profile} from "../../pages";

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Feed/>}/>
            <Route path={"/messages"} element={<Messages/>}/>
            <Route path={"/notifications"} element={<Notifications/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default RoutesComponents