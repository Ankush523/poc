import React, { useState } from 'react'
import { ethers } from 'ethers'
import GetSF from "../hooks/GetSF";
import { useAccount, useSigner } from 'wagmi'

const Tokenselect = () => {
        const [fromToken, setFromToken] = useState("0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a"); //USDC ERC20 Contract
        const [toToken, setToToken] = useState("0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947"); //ETH ERC20 Contract

        console.log(fromToken)
        console.log(toToken)

        const[amount, setAmount] = useState('0')
        const {data:signer} = useSigner()
        const {address} = useAccount()

        const upgrade = async () => {
            const sf= await GetSF();
            const supertokenx = await sf.loadSuperToken(fromToken);
            const supertoken = supertokenx.underlyingToken;
            const approve = supertoken.approve({
                receiver : supertokenx.address,
                amount : ethers.utils.parseEther("1000")
            });
            const apv = await approve.exec(signer);
            await apv.wait();
            const op = supertokenx.upgrade({amount : ethers.utils.parseEther("1000")});
            const res = await op.exec(signer);
            console.log(res)
        }
    
        const downgrade = async () => {
            const sf= await GetSF();
            const supertokenx = await sf.loadSuperToken(toToken);
            const approve =  supertokenx.approve({
                receiver: supertokenx.address || '0x0',
                amount: ethers.utils.parseEther(amount)
            });
            const apv = await approve.exec(signer);
            await apv.wait();
            const op =  supertokenx.downgrade({ amount: ethers.utils.parseEther(amount)});
            const res2 = op.exec(signer);
            console.log(res2)
        }
    

  return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between mx-[3%] mb-[4%] rounded-lg'>
                <div className='flex flex-col bg-grey3 border border-grey2 px-[2%] pt-[2%] pb-[3%] w-[45%] rounded-lg text-left'>
                    <label className='text-white1 mb-[3%]'>Sell</label>
                    <select className='py-[3%] rounded-md bg-grey4 text-white1' name="fromToken" onChange={(e) => setFromToken(e.target.value)}>
                        <option value="0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a">USDC</option>
                        <option value="0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947">ETH</option>
                        <option value="0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00">DAI</option>
                    </select>       

                </div>
                <div className='flex flex-col bg-grey3 border border-grey2 px-[2%] pt-[2%] pb-[3%] w-[45%] rounded-lg text-left'>
                    <label className='text-white1 mb-[3%]'>Receive</label>
                    <select className='py-[3%] rounded-md bg-grey4 text-white1' name="toToken" onChange={(e) => setToToken(e.target.value)}>
                        <option value="0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947">ETH</option>
                        <option value="0x8aE68021f6170E5a766bE613cEA0d75236ECCa9a">USDC</option>
                        <option value="0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00">DAI</option>
                    </select>
                </div>
            </div>

            <div className='flex flex-col border border-grey2 mx-[3%] mb-[4%] bg-grey3 rounded-lg py-[3%] px-[1%]'>
                <button className='text-white1 border border-grey2 m-[1%] p-2 rounded-xl bg-grey4' onClick={upgrade}>Continue</button>
            </div>
        </div>
  )
}

export default Tokenselect