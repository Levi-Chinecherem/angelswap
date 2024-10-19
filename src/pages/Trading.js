// src/components/Trading.js
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import LiquidityPool from '../artifacts/contracts/LiquidityPool.sol/LiquidityPool.json'; // Update with actual path
import OrderBook from '../components/OrderBook'; // Import your OrderBook component
import Mempool from '../components/Mempool'; // Import your Mempool component

const Trading = () => {
    const [amountA, setAmountA] = useState('');
    const [amountB, setAmountB] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [secureMode, setSecureMode] = useState(false);
    const [tradeType, setTradeType] = useState('swap'); // 'swap' or 'limit'

    useEffect(() => {
        const fetchAccount = async () => {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setUserAddress(accounts[0]);
            }
        };
        fetchAccount();
    }, []);

    const handleSwap = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const liquidityPool = new ethers.Contract('<LiquidityPoolAddress>', LiquidityPool.abi, signer);

            const tx = await liquidityPool.swap(amountA, amountB, { gasLimit: 3000000 });
            await tx.wait();
            alert("Swap Successful!");
        } catch (error) {
            console.error(error);
            alert("Swap failed! Check console for details.");
        }
    };

    const handleLimitOrder = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const liquidityPool = new ethers.Contract('<LiquidityPoolAddress>', LiquidityPool.abi, signer);

            const tx = await liquidityPool.placeLimitOrder(amountA, amountB, { gasLimit: 3000000 });
            await tx.wait();
            alert("Limit Order Placed Successfully!");
        } catch (error) {
            console.error(error);
            alert("Limit order failed! Check console for details.");
        }
    };

    const handleAddLiquidity = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const liquidityPool = new ethers.Contract('<LiquidityPoolAddress>', LiquidityPool.abi, signer);

            const tx = await liquidityPool.addLiquidity(amountA, amountB, { gasLimit: 3000000 });
            await tx.wait();
            alert("Liquidity Added Successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to add liquidity! Check console for details.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">Trading</h2>

            <div className="flex justify-between mb-4">
                <button onClick={() => setSecureMode(!secureMode)} className={`px-4 py-2 ${secureMode ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    {secureMode ? 'Secure Mode: ON' : 'Secure Mode: OFF'}
                </button>
                <select value={tradeType} onChange={e => setTradeType(e.target.value)} className="p-2 border rounded">
                    <option value="swap">Normal Swap</option>
                    <option value="limit">Limit Order</option>
                </select>
            </div>

            <div className="mb-4">
                <h3 className="text-xl">{tradeType === 'swap' ? 'Swap Tokens' : 'Place Limit Order'}</h3>
                <input type="text" value={amountA} onChange={e => setAmountA(e.target.value)} placeholder="Amount A" className="border rounded p-2 mr-2" />
                <input type="text" value={amountB} onChange={e => setAmountB(e.target.value)} placeholder="Amount B" className="border rounded p-2 mr-2" />
                <button 
                    onClick={tradeType === 'swap' ? handleSwap : handleLimitOrder}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    {tradeType === 'swap' ? 'Swap' : 'Place Limit Order'}
                </button>
            </div>

            <h2 className="text-2xl mt-4">Add Liquidity</h2>
            <button onClick={handleAddLiquidity} className="px-4 py-2 bg-blue-500 text-white rounded">
                Add Liquidity
            </button>

            {/* Mempool and Order Book Components */}
            <Mempool />
            <OrderBook />
        </div>
    );
};

export default Trading;
