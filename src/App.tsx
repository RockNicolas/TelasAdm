import { createBrowserRouter } from "react-router-dom"
import { Home } from '.././src/pages/home/home' 
import { Login } from '.././src/pages/login/login' 
import { Admin } from '.././src/pages/admin/admin'
import { Networks } from "./pages/networks/networks"

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
      path: '/networks',
      element: <Networks/>
    },
])

export { router };