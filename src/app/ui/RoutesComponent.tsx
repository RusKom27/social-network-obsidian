import React from "react"
import {Route, Routes} from "react-router-dom";

const RoutesComponents = () => {
    return (
        <Routes>
            <Route path={"/"} element={<div>Home</div>}/>
            <Route path={"/messages"} element={<div>Messages</div>}/>
            <Route path={"/notifications"} element={<div>Notifications</div>}/>
        </Routes>
    );
}

export default RoutesComponents