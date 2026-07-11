const { getHistory } = require("./tradeHistory");


function getPerformance() {

  const trades = getHistory();


  let profit = 0;
  let count = trades.length;


  for (const trade of trades) {

    if (trade.profit) {
      profit += Number(trade.profit);
    }

  }


  return {
    totalTrades: count,
    totalProfit: profit
  };

}


module.exports = {
  getPerformance
};
