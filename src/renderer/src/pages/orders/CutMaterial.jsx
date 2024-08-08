import React from 'react'
import StickyHeadTable from './components/StickyHeadTable'
import NewOrderForm from './components/NewOrderForm'
import CompleteForm from './components/CompletedForm'
import { useState } from 'react'

export default function CutMaterial() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);
  return (
    <>
    <h1>Hola CutMaterial</h1>
      <div className='flex flex-row flex-auto justify-evenly items-center'>
        <NewOrderForm open={open} onClose={handleClose}></NewOrderForm>
        <CompleteForm open={open} onClose={handleClose}></CompleteForm>
      </div>
      <div className='flex flex-row flex-auto py-2'>
        <StickyHeadTable></StickyHeadTable>
      </div>
    </>
  );
} 
