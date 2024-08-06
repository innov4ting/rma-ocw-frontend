import React from 'react'
import Search from './components/Search'
import StickyHeadTable from './components/StickyHeadTable'
import ModalPopup from '../../components/ModalPopup'


import { Button } from '@mui/material'

import { useState } from 'react'

export default function orders() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);
  return (
    <>
    <div className='flex flex-row flex-auto justify-center'>
      <h1 className='text-lg'>Talle de torno</h1>
      <h2> Control de Ordenes de Trabajo</h2>
    </div>

    <div className='flex flex-row flex-auto justify-evenly items-center'>
      <Search></Search>
      {/* <Button variant='contained' >Nueva Orden</Button> */}

      <ModalPopup open={open} onClose={handleClose}></ModalPopup>
      

      <Button variant='contained'>Concluir Orden</Button>

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
