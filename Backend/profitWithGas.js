const { estimateGas } = require("./gasEstimator");


async function calculateRealProfit(
  buyPrice,
  sellPrice,
  amount
) {

  const gas =
    await estimateGas();


  const tradeProfit =
    (Number(sellPrice) - Number(buyPrice))
    * Number(amount);


  return {
    grossProfit: tradeProfit,
    gasCost: gas,
    netProfit: tradeProfit
  };

}


module.exports = {
  calculateRealProfit
};
