import React, { useState } from 'react'
import { ethers } from 'ethers'
import GetSF from '../../hooks/GetSF'
import { useAccount, useSigner } from 'wagmi'

const Batchtransaction = () => {

    const[amount, setAmount] = useState('0')
    const {data:signer} = useSigner()
    const {address} = useAccount()

    const batch = async () => {
        const sf = await GetSF();
        const fdaix = await sf.loadSuperToken("0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00");
        const fdai = await fdaix.underlyingToken;
        const approve = fdai.approve({
          receiver : fdaix.address,
          amount : ethers.utils.parseEther("10000")
        });
        const apv = await approve.exec(signer);
        await apv.wait();
        const op = fdaix.upgrade({amount : ethers.utils.parseEther("10000")});
        const stream = fdaix.createFlow({
          sender : "0xF7bdD875Ca5449B9B98E756B1157264d325BA359",
          receiver: "0x7E9BC94e21BEb85DaFAF2Afd5530DE876951124D",
          flowRate: "10000"
        }
      );
      const batch = sf.batchCall([op, stream]);
      const res = await batch.exec(signer);
      console.log(res);
    }

  return (
    <div>
      <button onClick={batch} className="text-white1"> Batch</button>
    </div>
  )
}

export default Batchtransaction