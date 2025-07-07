import React from 'react';
import { useRoutes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import Login from '../components/Login/Login'
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../Pages/Dashboard/Dashboard';


const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ]);

  return routes;
};

export default AppRoutes;
