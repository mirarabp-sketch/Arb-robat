const axios = require("axios");
const config = require("./config");

async function getPrices() {
  const prices = [];

  // در مراحل بعد API واقعی صرافی‌ها جایگزین می‌شود.
  prices.push({
    exchange: "Aerodrome",
    price: 0.00410
  });

  prices.push({
    exchange: "Uniswap",
    price: 0.00418
  });

  prices.push({
    exchange: "SushiSwap",
    price: 0.00415
  });

  return prices;
}

module.exports = {
  getPrices
};
