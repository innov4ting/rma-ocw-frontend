import React from 'react'
import { Camera, Heart, X, Minus, Square, Maximize } from 'react-feather';



export default function TopBar() {

    const handleClose=()=> {
        window.electron.ipcRenderer.send("close-window")
        
    }

    const handleMinimize=()=> {
        window.electron.ipcRenderer.send("minimize-window")
        
    }



  return (
    <div>
      <div className='bg-blue-400 rounded-t-xl w-screen h-5' style={{WebkitAppRegion:"drag"}}></div>
      <div className='bg-blue-400 w-screen h-3' ></div>
      <div id='control-buttons' className='text-stone-200 absolute top-1 right-0 pe-2'>
        <button id='minimize' className='p-1' onClick={handleMinimize}><Minus size={24} color="white" /></button>
        <button id='minimize' className='p-1' ><Maximize size={20} color="white" /></button>
        <button id='close' className='p-1' onClick={handleClose}><X size={24} color="white" /></button>

        
      </div>
    </div>
  )
}

