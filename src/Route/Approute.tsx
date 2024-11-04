import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Expenses from "../pages/Expenses";
import Budget from "../pages/Budget";


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
                path: "expenses/:id",
                element: <Expenses/>
            },
            {
                path: "budget",
                element: <Budget/>
            }
        ]
    }
])

export default router;