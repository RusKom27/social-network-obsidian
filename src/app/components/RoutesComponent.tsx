import React from "react"
import {Route, Routes} from "react-router-dom";
import {Feed} from "../../pages";

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Feed/>}/>
            <Route path={"/messages"} element={<div>Messages</div>}/>
            <Route path={"/notifications"} element={<div>Notifications</div>}/>
        </Routes>
    );
}

export default RoutesComponents