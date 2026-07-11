const { ethers } = require("ethers");
const { getUniswapQuote } = require("./uniswapQuoter");
const contracts = require("./contracts");

async function getDEGENPrice() {
  try {
    const amountIn = ethers.parseUnits("1", 18);

    const quote = await getUniswapQuote(
      contracts.DEGEN,
      contracts.USDC,
      amountIn
    );

    if (!quote) return null;

    return {
      exchange: "Uniswap",
      degen: "1",
      usdc: ethers.formatUnits(quote, 6),
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.log(error.message);
    return null;
  }
}

module.exports = {
  getDEGENPrice
};
