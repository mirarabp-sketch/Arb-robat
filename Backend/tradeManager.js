const { validateTrade } = require("./tradeValidator");
const { executeTrade } = require("./tradeExecutor");


async function processTrade(trade) {

  const valid = validateTrade(trade);


  if (!valid) {

    return {
      success: false,
      message: "Trade rejected"
    };

  }


  return await executeTrade(trade);

}


module.exports = {
  processTrade
};
