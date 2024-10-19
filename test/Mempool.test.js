const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mempool", function () {
    let Mempool, mempool, owner, addr1;

    beforeEach(async function () {
        Mempool = await ethers.getContractFactory("Mempool");
        mempool = await Mempool.deploy();
        [owner, addr1] = await ethers.getSigners();
    });

    it("Should add a transaction to the mempool", async function () {
        await mempool.addTransaction(addr1.address, ethers.utils.parseEther("1"));
        const transaction = await mempool.transactions(0); // Assuming it's the first transaction
        expect(transaction.sender).to.equal(addr1.address);
        expect(transaction.amount).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should remove a transaction from the mempool", async function () {
        await mempool.addTransaction(addr1.address, ethers.utils.parseEther("1"));
        await mempool.removeTransaction(0); // Remove the first transaction
        const transactionCount = await mempool.transactionCount();
        expect(transactionCount).to.equal(0);
    });

    it("Should view transactions in the mempool", async function () {
        await mempool.addTransaction(addr1.address, ethers.utils.parseEther("1"));
        const transactions = await mempool.getTransactions();
        expect(transactions.length).to.equal(1);
        expect(transactions[0].sender).to.equal(addr1.address);
    });
});
