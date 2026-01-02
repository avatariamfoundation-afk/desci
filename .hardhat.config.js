require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.21",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      viaIR: true
    }
  },

  networks: {
    hardhat: {},

    bnbTestnet: {
      url: process.env.BNB_RPC_URL || "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 97,
      gasPrice: 20_000_000_000,
      gas: 8_000_000
    }
  }
};
