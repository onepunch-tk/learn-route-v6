import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

/*
* react router v5의 BrowserRouter Component를 사용하여 구현
* */

function RouterV5() {

    return (
        <BrowserRouter>
            {/*"Link"를 사용하는 Component는 BrowserRouter 안에 있어야한다*/}
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterV5
