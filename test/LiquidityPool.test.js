const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LiquidityPool", function () {
    let TokenA, TokenB, LiquidityPool, tokenA, tokenB, pool, owner, addr1;

    beforeEach(async function () {
        TokenA = await ethers.getContractFactory("ERC20Token");
        TokenB = await ethers.getContractFactory("ERC20Token");
        LiquidityPool = await ethers.getContractFactory("LiquidityPool");
        
        tokenA = await TokenA.deploy("TokenA", "TKA", 18, ethers.utils.parseEther("1000"));
        tokenB = await TokenB.deploy("TokenB", "TKB", 18, ethers.utils.parseEther("1000"));
        
        pool = await LiquidityPool.deploy(tokenA.address, tokenB.address);
        [owner, addr1] = await ethers.getSigners();

        // Provide initial approval and balance setup
        await tokenA.approve(pool.address, ethers.utils.parseEther("1000"));
        await tokenB.approve(pool.address, ethers.utils.parseEther("1000"));
    });

    it("Should add liquidity successfully", async function () {
        await pool.addLiquidity(ethers.utils.parseEther("100"), ethers.utils.parseEther("100"));
        const reserveA = await pool.reserveA();
        const reserveB = await pool.reserveB();
        expect(reserveA).to.equal(ethers.utils.parseEther("100"));
        expect(reserveB).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should swap TokenA for TokenB", async function () {
        await pool.addLiquidity(ethers.utils.parseEther("100"), ethers.utils.parseEther("100"));
        await tokenA.transfer(addr1.address, ethers.utils.parseEther("10"));
        await tokenA.connect(addr1).approve(pool.address, ethers.utils.parseEther("10"));

        await pool.connect(addr1).swap(tokenA.address, ethers.utils.parseEther("10"));
        const balanceB = await tokenB.balanceOf(addr1.address);
        expect(balanceB).to.be.gt(0);
    });

    it("Should remove liquidity successfully", async function () {
        await pool.addLiquidity(ethers.utils.parseEther("100"), ethers.utils.parseEther("100"));
        await pool.removeLiquidity(ethers.utils.parseEther("50"), ethers.utils.parseEther("50"));
        
        const reserveA = await pool.reserveA();
        const reserveB = await pool.reserveB();
        expect(reserveA).to.equal(ethers.utils.parseEther("50"));
        expect(reserveB).to.equal(ethers.utils.parseEther("50"));
    });
});
