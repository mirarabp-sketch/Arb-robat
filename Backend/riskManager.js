const settings = require("./tradeSettings");


function checkRisk(trade) {

  if (!trade) {
    return false;
  }


  if (
    Number(trade.amount) >
    Number(settings.maxTradeAmount)
  ) {
    return false;
  }


  return true;
}


module.exports = {
  checkRisk
};
