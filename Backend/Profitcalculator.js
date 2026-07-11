function calculateProfit(
  buyPrice,
  sellPrice,
  amount
) {

  const cost = buyPrice * amount;

  const revenue = sellPrice * amount;

  const profit = revenue - cost;

  const percent =
    ((sellPrice - buyPrice) / buyPrice) * 100;


  return {
    amount,
    cost,
    revenue,
    profit,
    profitPercent: percent.toFixed(2)
  };
}


module.exports = {
  calculateProfit
};
