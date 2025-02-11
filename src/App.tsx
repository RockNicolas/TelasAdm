import { createBrowserRouter } from "react-router-dom"
import { Home } from '.././src/pages/home/home' 
import { Login } from '.././src/pages/login/login' 
import { Admin } from '.././src/pages/admin/admin'
import { Networks } from "./pages/networks/networks"
import { NotFound } from "./pages/notfound/notfound"
import { Private } from './protect/private'
import './index.css'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/admin',
      element: <Private><Admin/></Private>
    },
    {
      path: '/admin/social',
      element:  <Private><Networks/></Private>
    },
    {
      path: '*',
      element: <NotFound />
    }
])

export { router };