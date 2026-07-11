const { scanMarkets } = require("./marketScanner");
const { checkOpportunity } = require("./opportunityMonitor");


async function startBot() {

  console.log("DEGEN Arbitrage Engine Running...");


  const markets = await scanMarkets();


  console.log("Markets:");
  console.log(markets);


  const opportunity = checkOpportunity(markets);


  if (opportunity) {
    console.log("Found:", opportunity);
  }

}


setInterval(
  startBot,
  10000
);


startBot();
