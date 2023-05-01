import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../page/home/home.page'
import { AuthProvider } from '../hook'
import { Login } from '../page/login/login.page'
import { Register } from '../page/register/register.component'
export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
])

