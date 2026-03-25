import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {path: "/home", element: <Home />},
            {path: "/about", element: <h1>About</h1>}

        ]
    }
])