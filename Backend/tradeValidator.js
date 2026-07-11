const settings = require("./tradeSettings");


function validateTrade(opportunity) {

  if (!opportunity) {
    return false;
  }


  const profit =
    Number(opportunity.profitPercent);


  if (profit < settings.minProfitPercent) {
    return false;
  }


  return true;
}


module.exports = {
  validateTrade
};
