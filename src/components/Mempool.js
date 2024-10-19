// src/components/Mempool.js
import React, { useEffect, useState } from 'react';

const Mempool = () => {
    const [mempool, setMempool] = useState([]);
    const [secureMode, setSecureMode] = useState(false);

    useEffect(() => {
        // Fetch mempool data from your backend or use a web3 service
        const fetchMempool = async () => {
            // Logic to get mempool transactions
            // setMempool(transactions);
        };

        fetchMempool();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl">Mempool Transactions</h2>
            <label>
                <input
                    type="checkbox"
                    checked={secureMode}
                    onChange={() => setSecureMode(!secureMode)}
                />
                Secure Mode (zk-proof enabled)
            </label>
            <ul>
                {mempool.map((tx, index) => (
                    <li key={index}>
                        Transaction: {tx.hash} - Mode: {secureMode ? 'Secure' : 'Open'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Mempool;
