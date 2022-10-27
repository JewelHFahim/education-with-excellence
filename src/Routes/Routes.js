import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Category from "../Pages/Cources/Category/Category";
import CourceDetail from "../Pages/Cources/CourceDetail/CourceDetail";
import Cources from "../Pages/Cources/Cources";
import SingleCource from "../Pages/Cources/SingleCource/SingleCource";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signin from "../Pages/Login/Sign In/Signin";
import Contact from "../Pages/Others/Contact/Contact";
import ErrorPage from "../Pages/Others/ErrorPage/ErrorPage";
import FAQ from "../Pages/Others/FAQ/FAQ";
import Profile from "../Pages/Others/Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Test from '../Pages/Test/Test'


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cources',
                loader: ()=> fetch('https://education-with-excellence-server.vercel.app/cources'),
                element: <Cources></Cources>
            },
            {
                path: '/category/:id',
                loader: ({params})=>fetch(`https://education-with-excellence-server.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/cources/:id',
                loader: ({params})=> fetch(`https://education-with-excellence-server.vercel.app/cources/${params.id}`),
                element: <PrivateRoute><CourceDetail></CourceDetail></PrivateRoute>
            },
            {
                path: '',
                element:<SingleCource></SingleCource>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/test',
                element: <Test></Test>
            }
        ]
    }

])