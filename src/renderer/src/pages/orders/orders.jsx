import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import ReturnButton from '../../components/ReturnButton';
import NewOrder from './NewOrder'

import { Button } from '@mui/material';

export default function Orders() {

  const navigate = useNavigate();

  const handleToNewOrder = () => {
    navigate ('neworder')
  };

  const handleToProcess = () => {
    navigate ('process')
  };

  const handleToCutMaterial = () => {
    navigate ('cutmaterial')
  };

  return (
    <>
      <TopBar></TopBar>
      <Header></Header>
      <div className="w-full  flex items-center justify-center">
        <div className=' w-[98%] h-8 rounded-t-lg' >
          <div className='flex px-2'>
            <ReturnButton></ReturnButton>
            <div className='px-4'>
              <Button 
              sx={{
                  backgroundColor:"#1976d2", 
                  color:"white", 
                  margin:"0 4px",
                  '&:hover': { 
                    backgroundColor:"white", 
                    color:"#1976d2", 
                    border:"1px solid #1976d2"
                  }}}
                  onClick={handleToNewOrder}
              >
                Orders
              </Button>
              <Button 
                sx={{
                    backgroundColor:"yellow", 
                    color:"black", 
                    margin:"0 4px", 
                    border:"1px solid black",

                    }}
              onClick={handleToProcess}
              >
                Process
              </Button>
              <Button 
                sx={{
                  backgroundColor:"red", 
                  color:"white", 
                  margin:"0 4px",
                  '&:hover': { 
                    backgroundColor:"white", 
                    color:"red", 
                    border:"1px solid red"
                  }}}
                  onClick={handleToCutMaterial}
              >
                Cut Material
              </Button>
            </div>
          </div >
          {/* <NewOrder></NewOrder> */}
        </div>
      </div>
      <Outlet/>
    </>
  )
}