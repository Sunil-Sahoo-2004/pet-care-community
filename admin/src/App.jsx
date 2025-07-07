import React from 'react';
import Cookies from 'js-cookie';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoute from './routes/AppRoute';

const App = () => {
  const token = Cookies.get('adminToken'); 

  if (!token) {
    return <Login />; 
  }

  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <AppRoute />
      </div>
    </div>
  );
};

export default App;
