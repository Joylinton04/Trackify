import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Expenses from "../pages/Expenses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home/>,
            },
            {
                path: "expenses",
                element: <Expenses/>
            }
        ]
    }
])

export default router;