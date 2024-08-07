import React from 'react'
import StickyHeadTable from './components/StickyHeadTable'
import NewOrderForm from './components/NewOrderForm'
import CompleteForm from './components/CompletedForm'
// import { Outlet, useNavigate } from 'react-router-dom';
// import CutMaterial from './CutMaterial';
// import Process from './Process';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


import { Button } from '@mui/material'

import { useState } from 'react'

export default function Orders() {

  // const navigate = useNavigate();

  // const goToCutMaterial = () => {
  //   navigate('cutmaterial')
  // }

  // const goToProcess = () => {
  //   navigate('process')
  // }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);
  return (
    <>
    <div className='flex flex-row flex-auto justify-evenly items-center'>

      <NewOrderForm open={open} onClose={handleClose}></NewOrderForm>
      <CompleteForm open={open} onClose={handleClose}></CompleteForm>

      {/* <button onClick={goToCutMaterial}>Go to Cut Material</button>
      <button onClick={goToProcess}>Go Process</button> */}
      
    </div>
    <div className='flex flex-row flex-auto py-2'>
      <StickyHeadTable></StickyHeadTable>
    </div>
    {/* <Outlet/> */}

    {/* <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<CutMaterial />}
                    />
                    <Route
                        exact
                        path="/process"
                        element={<Process />}
                    />
                    <Route
                        exact
                        path="/cutmaterial"
                        element={<CutMaterial />}
                    />
                </Routes>
      </BrowserRouter> */}
    
    </>

  );
}
