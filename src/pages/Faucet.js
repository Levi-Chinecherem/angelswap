// src/components/Faucet.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
import Faucet from '../artifacts/contracts/Faucet.sol/Faucet.json'; // Update with actual path

const FaucetComponent = () => {
    const [userAddress, setUserAddress] = useState('');

    const claimTokens = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const faucetContract = new ethers.Contract('<FaucetAddress>', Faucet.abi, signer);

            const tx = await faucetContract.claim(userAddress);
            await tx.wait();
            alert("Tokens Claimed!");
        } catch (error) {
            console.error(error);
            alert("Claim failed! Check console for details.");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl">Claim Tokens from Faucet</h2>
            <input type="text" value={userAddress} onChange={e => setUserAddress(e.target.value)} placeholder="Your Address" />
            <button onClick={claimTokens}>Claim Tokens</button>
        </div>
    );
};

export default FaucetComponent;
