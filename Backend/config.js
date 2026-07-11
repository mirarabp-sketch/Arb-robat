require("dotenv").config();

module.exports = {
  network: "base",
  token: "DEGEN",
  updateInterval: 5000, // هر ۵ ثانیه

  exchanges: [
    "Aerodrome",
    "Uniswap",
    "SushiSwap"
  ],

  minProfitPercent: 0.5
};
