import React from 'react'
import Navbar from '../components/Navbar'
import { ConnectButton, useChainModal,lightTheme } from '@rainbow-me/rainbowkit';
import bulb from '../images/bulb2.png';
const Invest = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='flex flex-row mx-[15%] justify-between mt-[3%]'>
            <div className='flex flex-col border border-grey1 w-[40%] rounded-2xl'>
                <div className='flex flex-col border border-grey2 m-[3%] my-[4%] bg-grey3 rounded-lg p-[3%]'>
                    <label className='text-white1 text-left mb-[2%]'>Choose Network : </label>
                    <ConnectButton label="Polygon" accountStatus="none" showBalance={false}/>
                </div>

                <div className='flex flex-col border border-grey2 mx-[3%] mb-[4%] rounded-lg'>
                    <label className='text-white1 py-[30%]'>Sell/Receive</label>
                </div>

                <div className='flex flex-col border border-grey2 mx-[3%] mb-[4%] bg-grey3 rounded-lg py-[3%] px-[1%]'>
                    <button className='text-white1 border border-grey2 m-[2%] p-2 rounded-xl bg-grey4'>Continue</button>
                </div>
            </div>


            <div className='flex flex-col w-[58%] border border-grey1 backdrop-blur-sm bg-white/30 rounded-2xl'>
                <div className='flex flex-col justify-center border border-grey1 my-[2%] mx-[2%] h-[80%] rounded-lg'>
                    <label className='text-white1'> Select a pair to view its price history</label>
                </div>
                <div className='flex flex-row border border-grey1 mx-[2%] mb-[3%] py-[3%] bg-grey3 rounded-lg'>
                    <img src={bulb} alt="bulb" className='w-[10%] mx-[2%] my-[6%]'/>
                    <div className='flex flex-col text-left'>
                        <label className='text-xl text-white1 mb-[2%]'>What is DCA?</label>
                        <p className='text-sm text-white1'>Dollar-cost averaging is a tool an investor can use to build savings and wealth over a long period while neutralizing the short-term volatility in the market.The purchases occur regardless of the asset's price and at regular intervals. In effect, this strategy removes much of the detailed work of attempting to time the market in order to make purchases of assets at the best prices.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invest