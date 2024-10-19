const hre = require("hardhat");

async function main() {
    // Deploy SecurityFeatures
    const SecurityFeatures = await hre.ethers.getContractFactory("SecurityFeatures");
    const securityFeatures = await SecurityFeatures.deploy();
    await securityFeatures.deployed();

    console.log("SecurityFeatures deployed to:", securityFeatures.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
