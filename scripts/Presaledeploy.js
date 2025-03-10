// scripts/deployPresale.js

const hre = require("hardhat");

async function main() {
  // Step 1: Get the deployer's account
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

//   // Step 2: Deploy the ERC20 token contract (assuming it isn't deployed yet)
//   const Token = await hre.ethers.getContractFactory("RBOToken");  // Replace "RBOToken" with your token contract
//   const token = await Token.deploy();
//   await token.deployed();
//   console.log("Token contract deployed to:", token.address);

  // Step 3: Set presale parameters (e.g., rate, start time, end time)
  const rate = 100;  // Number of tokens per 1 ETH (adjust as needed)
  const presaleStart = Math.floor(Date.now() / 1000) + 60;  // Presale starts in 1 minute from now
  const presaleEnd = presaleStart + 60 * 60 * 24;  // Presale ends in 24 hours

  // Step 4: Deploy the FmcTokenPresale contract
  const Presale = await hre.ethers.getContractFactory("FmcTokenPresale");
  const presale = await Presale.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3", rate, presaleStart, presaleEnd);
  await presale.waitForDeployment()

  
  console.log("Presale contract deployed to:", presale.target);

  // Step 5: Optionally, transfer tokens to the presale contract
  // const tokenAmountForSale = hre.ethers.parseUnits("1000000", 18);  // 1 million tokens for presale (adjust as needed)
  // await token.transfer(presale.address, tokenAmountForSale);
  // console.log(`${tokenAmountForSale} tokens transferred to the presale contract`);

  // Step 6: Log out the contract details
  // console.log(`Presale Contract Address: ${presale.address}`);
  // console.log(`Token Contract Address: ${token.address}`);
  // console.log(`Rate: ${rate} tokens per 1 ETH`);
  // console.log(`Presale starts at: ${new Date(presaleStart * 1000).toLocaleString()}`);
  // console.log(`Presale ends at: ${new Date(presaleEnd * 1000).toLocaleString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
