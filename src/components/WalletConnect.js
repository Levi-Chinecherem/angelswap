import React, { useState, useEffect } from 'react';

const WalletConnect = ({ onAccountChange }) => {
    const [userAddress, setUserAddress] = useState('');

    useEffect(() => {
        const checkIfWalletIsConnected = async () => {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setUserAddress(accounts[0]);
                    onAccountChange(accounts[0]);
                }
            }
        };
        checkIfWalletIsConnected();
    }, [onAccountChange]);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setUserAddress(accounts[0]);
                onAccountChange(accounts[0]);
            } catch (error) {
                console.error('Failed to connect wallet:', error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this application.');
        }
    };

    return (
        <div>
            {userAddress ? (
                <p>Connected: {userAddress}</p>
            ) : (
                <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default WalletConnect;
