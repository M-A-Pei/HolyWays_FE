import { RouteObject } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import AuthLayout from "../layout/authLayout";
import Index from "../pages/Index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import RaiseFund from "../pages/RaiseFund";
import FundDetail from "../pages/FundDetail";
import MakeRaiseFund from "../pages/MakeRaiseFund";

const route: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "raiseFund",
                element: <RaiseFund />
            },
            {
                path: "fundDetail/:id",
                element: <FundDetail />
            },
            {
                path: "makeRaiseFund",
                element: <MakeRaiseFund />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]

export default route