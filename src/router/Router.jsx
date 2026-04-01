import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  Home,
  Login,
  SignUp,
  Dashboard,
  Addresses,
  AccountDetails,
  Orders,
} from "./lazyRoutes";
import ProtectedRoute from "../utils/ProtectedRoute";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../pages/ProductDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <SignUp /> },
      {
        path: "productDetails",
        element: <ProductDetails />,
        children: [
          { index: true, element: <ProductDetails /> },
          { path: ":id", element: <ProductCard /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              { index: true, element: <AccountDetails /> },
              { path: "addresses", element: <Addresses /> },
              { path: "orders", element: <Orders /> },
            ],
          },
        ],
      },
    ],
  },
]);
