const { scanMarkets } = require("./marketScanner");
const { checkOpportunity } = require("./opportunityMonitor");
const config = require("./botConfig");


async function monitor() {

  try {

    const markets = await scanMarkets();

    console.log("Market Update:");
    console.log(markets);


    const opportunity = checkOpportunity(markets);


    if (opportunity) {
      console.log("Opportunity:", opportunity);
    }


  } catch (error) {

    console.log(
      "Monitor Error:",
      error.message
    );

  }

}


setInterval(
  monitor,
  config.scanInterval
);


monitor();
