import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homePage/Home";
import ProductDetails from "../pages/homePage/ProductDetails";
import DashboardLayout from "../dashboard/DashboardLayout";
import Profile from "../dashboard/Profile";
import ProfileUpdate from "../dashboard/profileUpdate";
import MyShoping from "../dashboard/user/MyShoping";
import History from "../dashboard/user/History";
import AllUser from "../dashboard/admin/AllUser";
import ManageUser from "../dashboard/admin/ManageUser";
import ErrorPage from "../sheardComponent/ErrorPage";

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
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/update/:id',
                element: <ProfileUpdate></ProfileUpdate>
            },
            {
                path: '/dashboard/myShoping',
                element: <MyShoping></MyShoping>
            },
            {
                path: '/dashboard/history',
                element: <History></History>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/manageUser',
                element: <ManageUser></ManageUser>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;