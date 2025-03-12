const { ethers } = require("hardhat");
// require("dotenv").config();

async function main() {
  // Get the signers
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the ERC20 token address (this should be the address of your ERC20 token)
  const tokenAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

  // Ensure that the token address is provided in the .env file
  if (!tokenAddress) {
    console.error("Please set the TOKEN_ADDRESS in the .env file");
    return;
  }

  // Get the StakingContract contract
  const StakingContract = await ethers.getContractFactory("StakingContract");

  // Deploy the staking contract with the token address
  const stakingContract = await StakingContract.deploy(tokenAddress);

  console.log("StakingContract deployed to:", stakingContract.target);

  // Optional: Transfer ownership (if you want the deployer to have ownership rights initially)
  // await stakingContract.transferOwnership(deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
