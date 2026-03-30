import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Addresses from "../components/Dashboard/views/Addresses";
import AccountDetails from "../components/Dashboard/views/AccountDetails";
import Orders from "../components/Dashboard/views/Orders";

export const Router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {path: "/login", element: <Login />},
            {path: "/register", element: <SignUp />},
            {path: "/dashboard", element: <Dashboard />},
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        element: <AccountDetails />,
                        index: true,
                    },
                    {path: "addresses", element: <Addresses />},
                    {path: "orders", element: <Orders />},
                    // {path: "wishlist", element: <Wishlist />}
                ]
            }
        ]
    },
])