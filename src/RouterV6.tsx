import {createBrowserRouter, redirect} from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import Error404 from "./screens/Error404";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
    {
        //routes container 선언
        path:"/",
        element: <Root/>,
        //routes 선언
        children:[
            {
                path: "",
                element: <Home/>,
                errorElement:<ErrorComponent/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path: "users/:userId",
                element: <User/>,
                children:[
                    {
                        path:"followers",
                        element:<Followers/>
                    }
                ]
            }
        ],
        errorElement: <Error404/>
    }
]);


export default router;