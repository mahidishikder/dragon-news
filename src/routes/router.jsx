import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../layouts/Home/Home"
import PagesCategory from "../components/pages/PagesCategory"
import Auth from "../layouts/Auth"



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
       path:'',
       element: <Navigate to={'/category/01'}></Navigate>,
      },
      {
       path:'/category/:id',
       element: <PagesCategory></PagesCategory>,
       loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]

  },
  {
    path:'/about',
    element: <h2>about</h2>
  },
  {
    path:'/career',
    element: <h2>career</h2>
  },
  {
    path:'/auth',
    element: <Auth></Auth>,
    children:[
      {
        path:'/auth/login',
        element:<h2>Login</h2>
      },
      {
        path:'/auth/register',
        element:<h2>Register</h2>
      }
    ]
  },
  {
    path:'*',
    element: <h2>error</h2>
  }
])

export default router