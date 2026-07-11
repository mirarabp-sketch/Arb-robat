const { ethers } = require("ethers");
const { provider } = require("./provider");
const dexConfig = require("./dexConfig");


const routerAddress = dexConfig.sushiSwap.router;


const routerAbi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      }
    ],
    "name": "getAmountsOut",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];


const router = new ethers.Contract(
  routerAddress,
  routerAbi,
  provider
);


async function getPrice(
  amountIn,
  path
) {

  const amounts =
    await router.getAmountsOut(
      amountIn,
      path
    );


  return amounts[1].toString();

}


module.exports = {
  getPrice
};
