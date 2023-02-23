import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
    return (
        <div>
            <Header/>
            {/*Outlet Component는 상위 경로(Component)에서 하위 경로를 렌더링 하기 위해 사용한다.*/}
            {/*Outlet Component는 path와 일치하는 Component로 렌더링*/}
            <Outlet/>
        </div>
    );
}

export default Root;