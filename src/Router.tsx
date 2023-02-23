import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import React from "react";

function Router() {

    return (
        <BrowserRouter>
            {/*"Link"를 사용하는 Component는 BrowserRouter 안에 있어야한다*/}
            <Header/>
            <Routes>
                <Route path={"/"}>
                    <Home/>
                </Route>
                <Route path={"/about"}>
                    <About/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
