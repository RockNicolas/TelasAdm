import { createBrowserRouter } from "react-router-dom"
import { Home } from '.././src/pages/home/home' 
import { Login } from '.././src/pages/login/login' 
import { Admin } from '.././src/pages/admin/admin'
import { Networks } from "./pages/networks/networks"
import { NotFound } from "./pages/notfound/notfound"

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
      element: <Admin/>
    },
    {
      path: '/admin/social',
      element: <Networks/>
    },
    {
      path: '*',
      element: <NotFound />
    }
])

export { router };