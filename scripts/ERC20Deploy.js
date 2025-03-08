// scripts/deploy.js
async function main() {
    // Get the signers (accounts) from Hardhat
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Compile the contract
    const FmcToken = await ethers.getContractFactory("FmcToken");
  
    // Deploy the contract
    console.log("Deploying FmcToken...");
    console.log(FmcToken);
    const fmcToken = await FmcToken.deploy();
  
    
    // Set the burn rate to a desired value (e.g., 500 basis points for 5%)
    const newBurnRate = 500; // 500 basis points (5%)
    console.log("Setting burn rate to:", newBurnRate);
    await fmcToken.setBurnRate(newBurnRate);
    
    console.log("Burn rate set to:", newBurnRate);
    console.log("FmcToken deployed to:", fmcToken.To);
    
  }
  
  // Run the main function and handle errors
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  