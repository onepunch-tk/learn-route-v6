import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import RouterV5 from './RouterV5'
import router from "./RouterV6";

/*
* react router v6의 createBrowserRouter 메써드를 사용하여 구현하기*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        {/*v5의 BrowserRouter Component를 사용하여 구현*/}
        {/*<RouterV5 />*/}

        {/*v6의 createBrowserRouter 구현*/}
        <RouterProvider router={router}/>
    </>
)
