async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy all tokens
    const Token1 = await ethers.getContractFactory("AngelToken");
    const token1 = await Token1.deploy();
    console.log("AngelToken deployed to:", token1.address);

    const Token2 = await ethers.getContractFactory("Halo");
    const token2 = await Token2.deploy();
    console.log("Halo deployed to:", token2.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    // const Token3 = await ethers.getContractFactory("Token3");
    // const token3 = await Token3.deploy();
    // console.log("Token3 deployed to:", token3.address);

    // const Token4 = await ethers.getContractFactory("Token4");
    // const token4 = await Token4.deploy();
    // console.log("Token4 deployed to:", token4.address);

    // const Token5 = await ethers.getContractFactory("Token5");
    // const token5 = await Token5.deploy();
    // console.log("Token5 deployed to:", token5.address);