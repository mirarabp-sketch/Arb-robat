const { getDEGENPrice } = require("./priceEngine");
const { checkOpportunity } = require("./opportunityMonitor");


async function runBot() {

  console.log("DEGEN Arbitrage Bot Started");


  const uniPrice = await getDEGENPrice();


  if (uniPrice) {

    const prices = [
      {
        exchange: uniPrice.exchange,
        price: Number(uniPrice.usdc)
      }
    ];


    checkOpportunity(prices);

  }

}


setInterval(
  runBot,
  10000
);


runBot();
