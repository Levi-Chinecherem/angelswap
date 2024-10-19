const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SecurityFeatures", function () {
    let Token, token, owner, addr1;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("ERC20Token");
        token = await Token.deploy("MyToken", "MTK", 18, ethers.utils.parseEther("1000"));
        [owner, addr1] = await ethers.getSigners();
    });

    it("Should prevent reentrancy attacks", async function () {
        // Assuming the token contract has a function that could be vulnerable to reentrancy
        const attackContract = await (await ethers.getContractFactory("AttackContract")).deploy(token.address);
        
        // This should revert if the reentrancy guard is working
        await expect(attackContract.attack()).to.be.revertedWith("ReentrancyGuard: reentrant call");
    });

    it("Should restrict access to only owner", async function () {
        await expect(token.connect(addr1).mint(addr1.address, ethers.utils.parseEther("10")))
            .to.be.revertedWith("Ownable: caller is not the owner");
    });
});
