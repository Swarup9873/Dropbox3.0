require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "process.env.GOERLI_URL",
      accounts: [ `process.env.PRIVATE_KEY` ]
    }
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
