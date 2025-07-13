import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LoginPopup from '../components/ui/loginpopup/LoginPopup';
import Profile from '../components/ui/profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Adoption from '../pages/Adoption/Adoption';
import ServicePage from '../pages/services/ServicePage';
import Foroums from '../pages/Foroums/Foroums';


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/login',
      element: (
        <PublicRoute>
          <LoginPopup />
        </PublicRoute>
      ),
    },
    {
      path: '/register',
      element: (
        <PublicRoute>
          <LoginPopup />
        </PublicRoute>
      ),
    },
    {
      path: '/profile',
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: '/adoption',
      element: (
        <ProtectedRoute>
          <Adoption />
        </ProtectedRoute>
      ),
    },
    {
      path: '/services',
      element: (
        <ProtectedRoute>
          <ServicePage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/forum',
      element: (
        <ProtectedRoute>
          <Foroums />
        </ProtectedRoute>
      ),
    },
  ]);

  return routes;
};

export default AppRoutes;