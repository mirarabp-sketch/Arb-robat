const { wallet } = require("./wallet");
const { saveTransaction } = require("./transactionLogger");


async function executeTrade(trade) {

  try {

    const txData = {
      type: "SIMULATION",
      tokenIn: trade.tokenIn,
      tokenOut: trade.tokenOut,
      amount: trade.amount,
      status: "PENDING"
    };


    saveTransaction(txData);


    return {
      success: true,
      message: "Trade prepared",
      data: txData
    };


  } catch (error) {

    return {
      success: false,
      error: error.message
    };

  }

}


module.exports = {
  executeTrade
};
