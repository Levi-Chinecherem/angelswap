// src/components/OrderBook.js
import React, { useEffect, useState } from 'react';
import OrderBook from '../artifacts/contracts/OrderBook.sol/OrderBook.json'; // Update with actual path
import { ethers } from 'ethers';

const OrderBookComponent = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const orderBookContract = new ethers.Contract('<OrderBookAddress>', OrderBook.abi, provider);

            const activeOrders = await orderBookContract.getActiveOrders(); // Implement this function in your contract
            setOrders(activeOrders);
        };

        fetchOrders();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl">Order Book</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        Order ID: {order.id} - Amount: {order.amount} - Price: {order.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderBookComponent;
