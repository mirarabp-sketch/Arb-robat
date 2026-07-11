const { ethers } = require("ethers");
const { provider } = require("./provider");


const PRIVATE_KEY = process.env.PRIVATE_KEY;


const wallet = new ethers.Wallet(
  PRIVATE_KEY,
  provider
);


module.exports = {
  wallet
};
