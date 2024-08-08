import { Outlet, useNavigate } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";



const AppRouter = () => {
  <>
    <Outlet/>
    <BrowserRouter>
      <Routes>
        <Route
            exact
            path='/'
            element={<AppContent/>}
            />
        <Route
            exact
            path='/orders'
            element={<Orders/>}
            />
        <Route
            exact
            path='/dashboard'
            element={<Dashboard/>}
            />
      </Routes>
    </BrowserRouter>
  </>
  };


export default AppRouter;