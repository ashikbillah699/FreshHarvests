import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homePage/Home";
import ProductDetails from "../pages/homePage/ProductDetails";
import DashboardLayout from "../dashboard/DashboardLayout";
import Profile from "../dashboard/Profile";
import ProfileUpdate from "../dashboard/profileUpdate";
import MyShoping from "../dashboard/user/MyShoping";
import AllUser from "../dashboard/admin/AllUser";
import ErrorPage from "../sheardComponent/ErrorPage";
import AddProduct from "../dashboard/admin/AddProduct";
import ManageProducts from "../dashboard/admin/ManageProducts";
import UpdateProduct from "../dashboard/admin/UpdateProduct";

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
            // user route
            {
                path: '/dashboard/update/:id',
                element: <ProfileUpdate></ProfileUpdate>
            },
            {
                path: '/dashboard/myShoping',
                element: <MyShoping></MyShoping>
            },
            // Admin rote
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/manageProducts',
                element: <ManageProducts></ManageProducts>
            },
            {
                path: '/dashboard/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;