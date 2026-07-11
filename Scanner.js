const axios = require("axios");

async function getPrices() {
  const prices = [];

  try {
    // TODO: اتصال به API واقعی Aerodrome
    prices.push({
      exchange: "Aerodrome",
      price: 0.00410
    });

    // TODO: اتصال به API واقعی Uniswap
    prices.push({
      exchange: "Uniswap",
      price: 0.00418
    });

    // TODO: اتصال به API واقعی SushiSwap
    prices.push({
      exchange: "SushiSwap",
      price: 0.00415
    });

    return prices;
  } catch (err) {
    console.error(err.message);
    return [];
  }
}

module.exports = {
  getPrices
};
