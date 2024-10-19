const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Faucet", function () {
    let Faucet, Token, faucet, token, owner, addr1;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("ERC20Token");
        Faucet = await ethers.getContractFactory("Faucet");

        token = await Token.deploy("MyToken", "MTK", 18, ethers.utils.parseEther("1000"));
        faucet = await Faucet.deploy(token.address);
        [owner, addr1] = await ethers.getSigners();

        // Transfer some tokens to the faucet
        await token.transfer(faucet.address, ethers.utils.parseEther("500"));
    });

    it("Should distribute tokens correctly", async function () {
        await faucet.connect(addr1).requestTokens(ethers.utils.parseEther("10"));
        const balance = await token.balanceOf(addr1.address);
        expect(balance).to.equal(ethers.utils.parseEther("10"));
    });

    it("Should not distribute more than available", async function () {
        await expect(faucet.connect(addr1).requestTokens(ethers.utils.parseEther("1000")))
            .to.be.revertedWith("Insufficient faucet balance");
    });

    it("Should respect distribution limits", async function () {
        await faucet.connect(addr1).requestTokens(ethers.utils.parseEther("10"));
        await expect(faucet.connect(addr1).requestTokens(ethers.utils.parseEther("10")))
            .to.be.revertedWith("Request limit exceeded");
    });
});
