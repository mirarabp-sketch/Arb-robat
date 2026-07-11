const { checkRisk } = require("./riskManager");
const { saveTrade } = require("./tradeHistory");
const settings = require("./settings");


async function processTrade(opportunity) {

  if (!checkRisk(opportunity)) {
    return {
      status: "Rejected",
      reason: "Low profit"
    };
  }


  if (!settings.autoTrade) {

    saveTrade({
      type: "SIMULATION",
      ...opportunity
    });


    return {
      status: "Simulation",
      message: "Trade saved"
    };
  }


  // در مرحله بعد:
  // اجرای واقعی Swap روی شبکه Base اضافه می‌شود


  return {
    status: "Waiting"
  };
}


module.exports = {
  processTrade
};
