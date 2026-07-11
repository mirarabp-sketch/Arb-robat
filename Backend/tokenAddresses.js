require("dotenv").config();

module.exports = {

  DEGEN: {
    address: process.env.DEGEN_ADDRESS,
    symbol: "DEGEN"
  },

  USDC: {
    address: process.env.USDC_ADDRESS,
    symbol: "USDC"
  }

};
