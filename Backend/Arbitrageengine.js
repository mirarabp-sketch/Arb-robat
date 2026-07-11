function findOpportunity(prices) {

  if (!prices || prices.length < 2) {
    return null;
  }

  let lowest = prices[0];
  let highest = prices[0];

  for (const item of prices) {
    if (item.price < lowest.price) {
      lowest = item;
    }

    if (item.price > highest.price) {
      highest = item;
    }
  }

  const profit =
    ((highest.price - lowest.price) / lowest.price) * 100;


  return {
    buyFrom: lowest.exchange,
    buyPrice: lowest.price,

    sellTo: highest.exchange,
    sellPrice: highest.price,

    profitPercent: profit.toFixed(2)
  };
}


module.exports = {
  findOpportunity
};
