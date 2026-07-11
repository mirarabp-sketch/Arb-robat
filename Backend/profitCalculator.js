function calculateProfit(
  buyPrice,
  sellPrice,
  amount
) {

  const cost =
    Number(buyPrice) * Number(amount);


  const revenue =
    Number(sellPrice) * Number(amount);


  const profit =
    revenue - cost;


  const percent =
    (profit / cost) * 100;


  return {
    profit,
    percent
  };

}


module.exports = {
  calculateProfit
};
