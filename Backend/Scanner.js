const { scanBase } = require("./baseScanner");

async function getPrices() {
  const prices = [];

  const uniswapPrice = await scanBase();

  if (uniswapPrice) {
    prices.push({
      exchange: "Uniswap",
      price: Number(uniswapPrice)
    });
  }

  return prices;
}

module.exports = {
  getPrices
};
