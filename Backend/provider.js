const { ethers } = require("ethers");


const RPC_URL = process.env.BASE_RPC_URL;


const provider = new ethers.JsonRpcProvider(
  RPC_URL
);


module.exports = {
  provider
};
