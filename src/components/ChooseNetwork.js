import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
const ChooseNetwork = () => {
  return (
    <div className='flex flex-col border border-grey2 m-[3%] my-[4%] bg-grey3 rounded-lg p-[3%]'>
        <label className='text-white1 text-left mb-[2%]'>Choose Network : </label>
        <ConnectButton label="Ethereum" accountStatus="none" showBalance={false}/>
    </div>
  )
}

export default ChooseNetwork