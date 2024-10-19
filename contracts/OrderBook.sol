// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract OrderBook {
    struct Order {
        address trader;
        uint256 amount;
        uint256 price;
        bool isBuy;
        bool isActive;
    }

    Order[] public orders;
    mapping(address => uint256) public balances;

    event OrderPlaced(uint256 indexed orderId, address indexed trader, uint256 amount, uint256 price, bool isBuy);
    event OrderCancelled(uint256 indexed orderId, address indexed trader);
    event OrderExecuted(uint256 indexed orderId, address indexed trader, uint256 amount);

    function placeOrder(uint256 amount, uint256 price, bool isBuy) external {
        orders.push(Order(msg.sender, amount, price, isBuy, true));
        uint256 orderId = orders.length - 1;
        emit OrderPlaced(orderId, msg.sender, amount, price, isBuy);
    }

    function cancelOrder(uint256 orderId) external {
        require(orders[orderId].trader == msg.sender, "Not your order");
        require(orders[orderId].isActive, "Order already inactive");
        orders[orderId].isActive = false;
        emit OrderCancelled(orderId, msg.sender);
    }

    function executeOrder(uint256 orderId, uint256 amount) external {
        require(orders[orderId].isActive, "Order is not active");
        Order storage order = orders[orderId];
        order.amount -= amount;
        if (order.amount == 0) {
            order.isActive = false;
        }
        emit OrderExecuted(orderId, order.trader, amount);
    }
}
