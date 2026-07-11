const { ethers } = require("ethers");
const { provider } = require("./wallet");

const ROUTER = "0x";

const abi = [
  "function getAmountsOut(uint amountIn, address[] memory path) external view returns (uint[] memory amounts)"
];

const router = new ethers.Contract(
  ROUTER,
  abi,
  provider
);

async function getSushiQuote(tokenIn, tokenOut, amountIn) {
  try {
    const path = [
      tokenIn,
      tokenOut
    ];

    const amounts = await router.getAmountsOut(
      amountIn,
      path
    );

    return amounts[1];

  } catch (error) {
    console.log("Sushi Error:", error.message);
    return null;
  }
}

module.exports = {
  getSushiQuote
};
