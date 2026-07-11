const { getDEGENPrice } = require("./priceEngine");
// بعداً:
// const { getSushiQuote } = require("./sushiSwap");
// const { getAerodromeQuote } = require("./aerodromeScanner");


async function scanMarkets() {

  const markets = [];


  const uniswap = await getDEGENPrice();

  if (uniswap) {
    markets.push({
      exchange: "Uniswap",
      price: Number(uniswap.usdc)
    });
  }


  // صرافی‌های دیگر بعد از اتصال واقعی اضافه می‌شوند


  return markets;
}


module.exports = {
  scanMarkets
};
