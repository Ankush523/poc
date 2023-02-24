import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import icon from "../images/m_trans.png"
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between border-b border-b-grey2'>
        <div className='flex flex-row'>
            <img src={icon} alt="icon" className='w-[15%] ml-[10%]'/>
            <button className='text-white1 ml-[20%] text-sm'>Invest</button>
            <button className='text-white1 ml-[10%] text-sm'>Swap</button>
        </div>
      
        <div className='mt-[1%] mr-[5%]'>
            <ConnectButton/>
        </div>
    </div>
  )
}

export default Navbar