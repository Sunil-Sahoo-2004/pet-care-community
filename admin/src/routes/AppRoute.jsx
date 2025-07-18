import React from 'react';
import { useRoutes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import Login from '../components/Login/Login'
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Forums from '../Pages/Forums/Forums';
import ServiceTable from '../Pages/Services/ServiceTable';


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
    {
      path: '/forums',
      element: (
        <ProtectedRoute>
          <Forums />
        </ProtectedRoute>
      ),
    },
    {
      path: '/services',
      element: (
        <ProtectedRoute>
          <ServiceTable />
        </ProtectedRoute>
      ),
    },
  ]);

  return routes;
};

export default AppRoutes;
