import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import bulb from '../images/bulb3.png';
// import caution from '../images/caution.png';
import growth from '../images/growth.png';
const Invest = () => {
    
        const [fromToken, setFromToken] = useState("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"); //USDC ERC20 Contract
        const [toToken, setToToken] = useState("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"); //WETH ERC20 Contract

        function changeToToken(e){
            setToToken(e.target.value);
            const selectedToToken = e.target.value;
        }


        function changeFromToken(e){
            setFromToken(e.target.value);
            const selectedFromToken = e.target.value;
        }

  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='flex flex-row mx-[15%] justify-between mt-[3%]'>
            <div className='flex flex-col border border-grey1 w-[40%] rounded-2xl h-[fit-content]'>
                <div className='flex flex-col border border-grey2 m-[3%] my-[4%] bg-grey3 rounded-lg p-[3%]'>
                    <label className='text-white1 text-left mb-[2%]'>Choose Network : </label>
                    <ConnectButton label="Ethereum" accountStatus="none" showBalance={false}/>
                </div>

                <div className='flex flex-row justify-between mx-[3%] mb-[4%] rounded-lg'>
                    <div className='flex flex-col bg-grey3 border border-grey2 px-[3%] py-[2%] w-[45%] rounded-lg text-left'>
                    <label className='text-white1 mb-[3%]'>Sell</label>
                        <select className='py-[3%] rounded-md bg-grey4 text-white1' name="fromToken" value={fromToken} onChange={(e) => changeFromToken(e)}>
                            <option value="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48">USDC</option>
                            <option value="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2">WETH</option>
                            <option value="0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599">WBTC</option>
                            <option value="0x6B175474E89094C44Da98b954EedeAC495271d0F">DAI</option>
                        </select>

                    </div>
                    <div className='flex flex-col bg-grey3 border border-grey2 px-[3%] py-[2%] w-[45%] rounded-lg text-left'>
                        <label className='text-white1 mb-[3%]'>Receive</label>
                        <select className='py-[3%] rounded-md bg-grey4 text-white1' name="toToken" value={toToken} onChange={(e) => changeToToken(e)}>
                            <option value="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2">WETH</option>
                            <option value="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48">USDC</option>
                            <option value="0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599">WBTC</option>
                            <option value="0x6B175474E89094C44Da98b954EedeAC495271d0F">DAI</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col border border-grey2 mx-[3%] mb-[4%] bg-grey3 rounded-lg py-[3%] px-[1%]'>
                    <button className='text-white1 border border-grey2 m-[2%] p-2 rounded-xl bg-grey4'>Continue</button>
                </div>
            </div>


            <div className='flex flex-col w-[58%] border border-grey1 backdrop-blur-sm bg-white/30 rounded-2xl'>
                <div className='flex flex-col justify-center border border-grey1 py-[20%] my-[2%] mx-[2%] h-[80%] rounded-lg'>
                    <img src={growth} className=" w-[10%] mx-[45%]"/>
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