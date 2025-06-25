import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/layout/navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
