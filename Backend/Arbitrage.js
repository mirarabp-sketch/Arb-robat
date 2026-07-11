function findArbitrage(prices) {
  if (!prices || prices.length < 2) return null;

  const sorted = [...prices].sort((a, b) => a.price - b.price);

  const buy = sorted[0];
  const sell = sorted[sorted.length - 1];

  const profit = (((sell.price - buy.price) / buy.price) * 100).toFixed(2);

  return {
    buyFrom: buy.exchange,
    buyPrice: buy.price,
    sellTo: sell.exchange,
    sellPrice: sell.price,
    profitPercent: profit
  };
}

module.exports = {
  findArbitrage
};
