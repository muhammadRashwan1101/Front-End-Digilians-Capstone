import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const Login = lazy(() => import("../pages/Login"));
export const SignUp = lazy(() => import("../pages/SignUp"));
export const Dashboard = lazy(() => import("../pages/Dashboard"));
export const Addresses = lazy(() => import("../components/Dashboard/views/Addresses"));
export const AccountDetails = lazy(() => import("../components/Dashboard/views/AccountDetails"));
export const Orders = lazy(() => import("../components/Dashboard/views/Orders"));