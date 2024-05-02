import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import AuthLayout from './layouts/AuthLayout'
import { LoginPage, RegisterPage, TasksPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/', element: <LoginPage /> },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '/tasks',
    element: <BaseLayout />,
    children: [{ path: '/tasks', element: <TasksPage /> }]
  }
])

const PageRouter = () => {
  return <RouterProvider router={router} />
}

export default PageRouter
