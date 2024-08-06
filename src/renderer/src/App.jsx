import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import TopBar from './components/TopBar'
import StickyHeadTable from './components/Table'
import FreeSolo from './components/TaskSearch'
import { Button } from '@mui/material'
import BasicModal from './components/ui/ModalPopup'
import { useState } from 'react'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);

  return (
    <>
    <TopBar></TopBar>
    <div className='flex flex-row flex-auto justify-center'>
      <h1 className='text-lg'>Talle de torno</h1>
      <h2> Control de Ordenes de Trabajo</h2>
    </div>

    <div className='flex flex-row flex-auto justify-evenly items-center'>
      <FreeSolo></FreeSolo>
      <Button variant='contained' >Nueva Orden</Button>

      <BasicModal open={open} onClose={handleClose}></BasicModal>
      

      <Button variant='contained'>Cancelar Orden</Button>

    </div>
    <div className='flex flex-row flex-auto py-2'>
      <StickyHeadTable></StickyHeadTable>

    </div>


    <div className='flex flex-row flex-auto justify-evenly items-center'>
      <Button variant='contained'>Corte de material</Button>
      <Button variant='contained'>Proceso</Button>
      <Button variant='contained'>Ordenes terminadas</Button>
    </div>

    
    </>
  )
}

export default App



