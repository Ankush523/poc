import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import bulb from '../images/bulb3.png';
// import caution from '../images/caution.png';
import growth from '../images/growth.png';
import Tokenselect from '../components/Tokenselect';
import ChooseNetwork from '../components/ChooseNetwork';
import DCAInfo from '../components/DCAInfo';
import arrow from '../images/arrow.png';
import SuperTokens from '../components/Superfluid/SuperTokens';
const Invest = () => {

  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='flex flex-row mx-[15%] justify-between mt-[3%]'>
            <div className='flex flex-col w-[40%]'>
                <div className='flex flex-col border border-grey1 rounded-2xl h-[fit-content]'>
                    <ChooseNetwork/>
                    <Tokenselect/>
                </div>

                <div className='flex flex-col border border-grey4 rounded-2xl h-[fit-content] mt-[6%] hover:border-dotted'>
                    <div className='flex flex-col border border-grey2 mx-[3%] my-[4%] bg-grey3 rounded-lg py-[3%] px-[1%]'>
                        <label className='text-white1'>To track your current STREAMS click below</label>
                    </div>
                    <img src={arrow} alt="arrow" className='animate-bounce w-[40px] mx-[45%]'/>
                    <button className='text-white1 border border-grey2 mx-[3%] mb-[4%] p-2 rounded-xl bg-grey4'><a href="https://app.superfluid.finance/">Track Streams</a></button>
                </div>
            </div>


            <div className='flex flex-col w-[58%] border border-grey1 backdrop-blur-sm bg-white/30 rounded-2xl shadow-2xl h-[fit-content]'>
                <div className='flex flex-col justify-center border border-grey1  my-[2%] mx-[2%] rounded-lg'>
                    <SuperTokens/>
                </div>
                <div className='flex flex-row border border-grey1 mx-[2%] mb-[2%] py-[3%] bg-grey3 rounded-lg'>
                    <img src={bulb} alt="bulb" className='w-[10%] mx-[2%] my-[6%]'/>
                    <DCAInfo/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invest