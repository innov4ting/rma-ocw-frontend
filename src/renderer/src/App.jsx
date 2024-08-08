import { Outlet, useNavigate } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TopBar from './components/TopBar'
import Header from './components/Header';
import DashboardIcon from './assets/icons/dashboard_icon.svg';
import OrdersIcon from './assets/icons/orders_icon.svg'
import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Orders';

import NewOrder from './pages/orders/NewOrder';
import Process from './pages/orders/Process';
import CutMaterial from './pages/orders/CutMaterial';

function AppContent() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('dashboard')
  }

  const goToOrders = () => {
    navigate('orders')
  }

  return (
    <>
      <TopBar></TopBar>
      <Header></Header>
      
      <div className='flex justify-center py-8 space-x-10 ' >
        <button 
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl"  
        onClick={goToOrders}>
          {/* Go Orders  */}
          <img src={OrdersIcon} alt="orders" className="w-60 h-60 filter-white"/>
        </button> 

        <button 
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl"
        onClick={goToDashboard}>
          {/* Go to Cut Dashboard */}
          <img src={DashboardIcon} alt="dashboard" className="w-60 h-60 filter-white"/>
        </button>
      </div>
    </>
  )
}

function App() {
  return (
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
              path='/orders'
              element={<Orders/>}
              >
              <Route
                exact
                path='neworder'
                element={<NewOrder/>}
                />
              <Route
                exact
                path='process'
                element={<Process/>}
                />
              <Route
                exact
                path='cutmaterial'
                element={<CutMaterial/>}
                />
                
          </Route>
          <Route
              exact
              path='/dashboard'
              element={<Dashboard/>}
              />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App