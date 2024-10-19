const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20Token", function () {
    let Token, token, owner, addr1, addr2;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("ERC20Token");
        token = await Token.deploy("MyToken", "MTK", 18, ethers.utils.parseEther("1000"));
        [owner, addr1, addr2] = await ethers.getSigners();
    });

    it("Should assign the initial supply to the owner", async function () {
        const ownerBalance = await token.balanceOf(owner.address);
        expect(ownerBalance).to.equal(ethers.utils.parseEther("1000"));
    });

    it("Should transfer tokens between accounts", async function () {
        await token.transfer(addr1.address, ethers.utils.parseEther("100"));
        const balance1 = await token.balanceOf(addr1.address);
        expect(balance1).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should not allow transferring more than the balance", async function () {
        await expect(token.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("1")))
            .to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });

    it("Should update balances correctly after transfers", async function () {
        await token.transfer(addr1.address, ethers.utils.parseEther("100"));
        await token.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("50"));
        const balance1 = await token.balanceOf(addr1.address);
        const balance2 = await token.balanceOf(addr2.address);
        expect(balance1).to.equal(ethers.utils.parseEther("50"));
        expect(balance2).to.equal(ethers.utils.parseEther("50"));
    });

    it("Should handle allowances and transfersFrom correctly", async function () {
        await token.approve(addr1.address, ethers.utils.parseEther("200"));
        await token.connect(addr1).transferFrom(owner.address, addr2.address, ethers.utils.parseEther("100"));
        const balance2 = await token.balanceOf(addr2.address);
        expect(balance2).to.equal(ethers.utils.parseEther("100"));
    });

    it("Should mint new tokens", async function () {
        await token.mint(owner.address, ethers.utils.parseEther("500"));
        const ownerBalance = await token.balanceOf(owner.address);
        expect(ownerBalance).to.equal(ethers.utils.parseEther("1500"));
    });

    it("Should burn tokens", async function () {
        await token.burn(owner.address, ethers.utils.parseEther("100"));
        const ownerBalance = await token.balanceOf(owner.address);
        expect(ownerBalance).to.equal(ethers.utils.parseEther("900"));
    });
});
