import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homePage/Home";
import ProductDetails from "../pages/homePage/ProductDetails";
import DashboardLayout from "../dashboard/DashboardLayout";
import Admin from "../dashboard/admin/Admin";
import User from "../dashboard/user/User";
import Profile from "../sheardComponent/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/admin',
                element: <Admin></Admin>
            },
            {
                path: '/dashboard/user',
                element: <User></User>
            },
            {
                path: '/dashboard',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;