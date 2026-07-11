const { processTrade } = require("./tradeManager");


async function executeOpportunity(opportunity) {

  console.log("Checking trade...");

  const result = await processTrade(opportunity);


  console.log(result);


  return result;
}


module.exports = {
  executeOpportunity
};
