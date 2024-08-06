import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";



const AppRouter = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    );
  };

  // Exportar las rutas
export const routes = {
    dashboard: '/dashboard',
    orders: '/orders'
  };

export default AppRouter;