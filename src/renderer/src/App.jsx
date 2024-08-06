import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import TopBar from './components/TopBar'
import { Button } from '@mui/material';
import Orders from './pages/orders/orders';


function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  


  return (

    <>
    <TopBar></TopBar>
    <div>
    <h1>My Electron App</h1>
    <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
    <Button onClick={() => navigate('/orders')}>Go to Orders</Button>
    <Orders></Orders>

    </div>
    </>
  )
}

export default App



