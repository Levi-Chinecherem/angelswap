const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    // Define addresses for the two tokens to be used in the pool
    const tokenAAddress = "0xTokenAAddressHere"; // Replace with actual deployed Token1 address
    const tokenBAddress = "0xTokenBAddressHere"; // Replace with actual deployed Token2 address
    const feeRate = 30; // 0.3% fee rate

    // Deploy LiquidityPool
    const LiquidityPool = await hre.ethers.getContractFactory("LiquidityPool");
    const liquidityPool = await LiquidityPool.deploy(tokenAAddress, tokenBAddress, feeRate);
    await liquidityPool.deployed();

    console.log("LiquidityPool deployed to:", liquidityPool.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
