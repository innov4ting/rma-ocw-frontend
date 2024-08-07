import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import TopBar from './components/TopBar'
import { Button } from '@mui/material';
import Orders from './pages/orders/Orders';


function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  


  return (

    <>
    <TopBar></TopBar>
    <div>
    <h1>My Electron App</h1>
    <div className='flex flex-row flex-auto justify-center'>
      <h1 className='text-lg'>Talle de torno</h1>
      <h2> Control de Ordenes de Trabajo</h2>
    </div>
    <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
    <Button onClick={() => navigate('/orders')}>Go to Orders</Button>
    <Orders></Orders>

    </div>
    </>
  )
}

export default App



