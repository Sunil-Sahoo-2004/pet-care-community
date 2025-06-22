import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home/Home'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> }
  ])

  return routes
}

export default AppRoutes
