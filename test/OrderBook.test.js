const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OrderBook", function () {
    let OrderBook, tokenA, tokenB, orderBook, owner, addr1;

    beforeEach(async function () {
        const Token = await ethers.getContractFactory("ERC20Token");
        tokenA = await Token.deploy("TokenA", "TKA", 18, ethers.utils.parseEther("1000"));
        tokenB = await Token.deploy("TokenB", "TKB", 18, ethers.utils.parseEther("1000"));

        OrderBook = await ethers.getContractFactory("OrderBook");
        orderBook = await OrderBook.deploy(tokenA.address, tokenB.address);
        [owner, addr1] = await ethers.getSigners();
    });

    it("Should create a buy order", async function () {
        await orderBook.connect(addr1).createOrder(tokenA.address, ethers.utils.parseEther("10"), ethers.utils.parseEther("1"));
        const order = await orderBook.orders(1); // Assuming this is the first order created
        expect(order.token).to.equal(tokenA.address);
        expect(order.amount).to.equal(ethers.utils.parseEther("10"));
    });

    it("Should execute an order", async function () {
        await orderBook.connect(addr1).createOrder(tokenA.address, ethers.utils.parseEther("10"), ethers.utils.parseEther("1"));
        await orderBook.executeOrder(1); // Execute the first order
        const order = await orderBook.orders(1);
        expect(order.isExecuted).to.be.true;
    });

    it("Should cancel an order", async function () {
        await orderBook.connect(addr1).createOrder(tokenA.address, ethers.utils.parseEther("10"), ethers.utils.parseEther("1"));
        await orderBook.cancelOrder(1);
        const order = await orderBook.orders(1);
        expect(order.isCancelled).to.be.true;
    });
});
