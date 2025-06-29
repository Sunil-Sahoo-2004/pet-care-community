import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/layout/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];
  return (
    <>
      <div className="App">
        <ToastContainer />
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <AppRoutes />
        {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
      </div>
    </>
  );
};

export default App;
