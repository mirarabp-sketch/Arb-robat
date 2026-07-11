const { ethers } = require("ethers");
const { provider } = require("./provider");
const { DEGEN } = require("./tokenAddresses");
const erc20Abi = require("./erc20Abi");


const token = new ethers.Contract(
  DEGEN.address,
  erc20Abi,
  provider
);


async function getBalance(address) {

  const balance =
    await token.balanceOf(address);


  const decimals =
    await token.decimals();


  return {
    raw: balance.toString(),
    formatted:
      ethers.formatUnits(
        balance,
        decimals
      )
  };

}


module.exports = {
  getBalance
};
