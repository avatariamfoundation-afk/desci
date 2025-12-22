const { ethers } = require("hardhat");
const fs = require('fs');
const configPath = './config/app.js';

async function main() {
  console.log("Deploying DeSci contracts...");

  const MedToken = await ethers.getContractFactory("MedToken");
  const desciToken = await MedToken.deploy();
  await desciToken.deployed();
  console.log("DeSciToken deployed at:", desciToken.address);

  const DeSci = await ethers.getContractFactory("DeSci");
  const desci = await DeSci.deploy(desciToken.address);
  await desci.deployed();
  console.log("DeSci deployed at:", desci.address);

  // Update config with token address
  const config = require(configPath);
  config.tokenContractAddress = desciToken.address;
  fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(config, null, 2)};`);
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
