// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await hre.ethers.getSigners();

  
  // Deploy RBOToken contract
  const RBOToken = await hre.ethers.getContractFactory("RBOToken");
  const rboToken = await RBOToken.deploy();
  await rboToken.waitForDeployment()
  // console.log({x})
  
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("RBOToken deployed to:", rboToken.target);

  // Optionally, set the burn rate if you want to customize it
  // const burnRate = 1000; // 10% burn rate (in basis points)
  // await rboToken.setBurnRate(burnRate);
  // console.log(`Burn rate set to: ${burnRate / 100}%`);
  
  // // You can also mint tokens or perform other initialization steps here
  // const mintAmount = 1000000  // Mint 1 million tokens
  // await rboToken.mint(deployer.address, mintAmount);
  // console.log(`Minted ${mintAmount} tokens to deployer's address`);

  return rboToken;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
