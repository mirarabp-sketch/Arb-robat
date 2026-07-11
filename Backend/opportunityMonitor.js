const { executeOpportunity } = require("./tradeExecutor");
const { findOpportunity } = require("./arbitrageEngine");
const { saveTrade } = require("./tradeHistory");


function checkOpportunity(prices) {

  const opportunity = findOpportunity(prices);


  if (!opportunity) {
    console.log("No opportunity");
    return null;
  }


  console.log("Opportunity Found:");
  console.log(opportunity);


  if (Number(opportunity.profitPercent) > 0.5) {

    saveTrade({
      type: "OPPORTUNITY",
      ...opportunity
    });

    executeOpportunity(opportunity);

}


  return opportunity;
}


module.exports = {
  checkOpportunity
};
