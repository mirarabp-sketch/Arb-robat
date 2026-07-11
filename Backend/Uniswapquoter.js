const { ethers } = require("ethers");
const { provider } = require("./wallet");

const QUOTER_V2 = "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a";

const abi = [
  "function quoteExactInputSingle((address tokenIn,address tokenOut,uint256 amountIn,uint24 fee,uint160 sqrtPriceLimitX96)) external returns (uint256 amountOut,uint160 sqrtPriceX96After,uint32 initializedTicksCrossed,uint256 gasEstimate)"
];

const quoter = new ethers.Contract(
  QUOTER_V2,
  abi,
  provider
);

async function getUniswapQuote(tokenIn, tokenOut, amountIn) {
  try {
    const result = await quoter.quoteExactInputSingle({
      tokenIn,
      tokenOut,
      amountIn,
      fee: 3000,
      sqrtPriceLimitX96: 0
    });

    return result.amountOut;

  } catch (error) {
    console.log("Uniswap Quote Error:", error.message);
    return null;
  }
}

module.exports = {
  getUniswapQuote
};
