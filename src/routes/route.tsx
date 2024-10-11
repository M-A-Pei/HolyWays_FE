import { RouteObject } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import AuthLayout from "../layout/authLayout";
import Index from "../pages/Index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

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