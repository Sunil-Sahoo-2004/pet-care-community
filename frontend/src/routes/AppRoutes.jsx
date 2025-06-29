import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import LoginPopup from '../components/ui/loginpopup/LoginPopup'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginPopup /> },
    { path: '/register', element: <LoginPopup /> }
  ])

  return routes
}

export default AppRoutes
