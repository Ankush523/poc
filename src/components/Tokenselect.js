import React from 'react'
import { useState } from 'react';
const Tokenselect = () => {
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
    <div className='flex flex-row justify-between mx-[3%] mb-[4%] rounded-lg'>
         <div className='flex flex-col bg-grey3 border border-grey2 px-[2%] pt-[2%] pb-[3%] w-[45%] rounded-lg text-left'>
            <label className='text-white1 mb-[3%]'>Sell</label>
            <select className='py-[3%] rounded-md bg-grey4 text-white1' name="fromToken" value={fromToken} onChange={(e) => changeFromToken(e)}>
                <option value="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48">USDC</option>
                <option value="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2">WETH</option>
                <option value="0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599">WBTC</option>
                <option value="0x6B175474E89094C44Da98b954EedeAC495271d0F">DAI</option>
            </select>       
        </div>
        <div className='flex flex-col bg-grey3 border border-grey2 px-[2%] pt-[2%] pb-[3%] w-[45%] rounded-lg text-left'>
            <label className='text-white1 mb-[3%]'>Receive</label>
            <select className='py-[3%] rounded-md bg-grey4 text-white1' name="toToken" value={toToken} onChange={(e) => changeToToken(e)}>
                <option value="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2">WETH</option>
                <option value="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48">USDC</option>
                <option value="0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599">WBTC</option>
                <option value="0x6B175474E89094C44Da98b954EedeAC495271d0F">DAI</option>
            </select>
        </div>
    </div>
  )
}

export default Tokenselect