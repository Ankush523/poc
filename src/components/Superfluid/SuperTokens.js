import React, { useState } from 'react'
import { ethers } from 'ethers'
import GetSF from '../../hooks/GetSF'
import { useAccount, useSigner } from 'wagmi'
const SuperTokens = () => {

    const[amount, setAmount] = useState('0')

    const {data:signer} = useSigner()
    const {address} = useAccount()

    const upgrade = async () => {
        const sf= await GetSF();
        const fdaix = await sf.loadSuperToken("0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00");
        const fdai = fdaix.underlyingToken;
        const approve = fdai.approve({
            receiver : fdaix.address,
            amount : ethers.utils.parseEther(amount)
        });
        const apv = await approve.exec(signer);
        await apv.wait();
        const op = fdaix.upgrade({amount : ethers.utils.parseEther(amount)});
        const res = await op.exec(signer);
    }

    const downgrade = async () => {
        const sf= await GetSF();
        const fdaix = await sf.loadSuperToken("0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00");
        const approve =  fdaix.approve({
            receiver: fdaix.address || '0x0',
            amount: ethers.utils.parseEther(amount)
        });
        const apv = await approve.exec(signer);
        await apv.wait();
        const op =  fdaix.downgrade({ amount: ethers.utils.parseEther(amount)});
        const res = op.exec(signer);
    }

        return(
            <div className='flex flex-col  text-white1 py-[2%]' >
                <div className="flex flex-col ">
                    <label className='text-2xl mb-[3%]'>Wrap/Unwrap</label>
                    <div className="flex flex-col justify-center">
                        <label className="text-sm pr-[25%] mb-[1%]">Enter amount : </label>
                        <input type="" placeholder="0.01" className="h-[50px] mx-[30%] rounded-lg bg-grey3 border border-grey1 pl-[5px]" onChange={(e)=>setAmount(e.target.value)} />
                    </div>
                    <div className="space-x-5 mt-[4%]">
                        <button onClick={upgrade} className="bg-grey4 rounded-lg w-[15%] py-2">to fDAIx</button>
                        <button onClick={downgrade} className="bg-grey4 rounded-lg w-[15%] py-2">to fDAI</button>
                    </div>
                </div>
            </div>
          );
}

export default SuperTokens