import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home/>,
            }
        ]
    }
])

export default router;