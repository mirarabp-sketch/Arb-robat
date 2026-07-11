const settings = require("./settings");


function checkRisk(opportunity) {

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
  checkRisk
};
