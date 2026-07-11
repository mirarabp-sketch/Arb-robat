require("dotenv").config();

const express = require("express");
const cors = require("cors");

const config = require("./config");
const { getPrices } = require("./scanner");
const { findArbitrage } = require("./arbitrage");
const { saveTrade, getTrades } = require("./history");
const { executeTrade } = require("./trader");

const app = express();

app.use(cors());
app.use(express.json());
const dashboardApi = require("./dashboardApi");

app.use("/api", dashboardApi);
app.get("/", (req, res) => {
  res.json({
    bot: "DEGEN Arbitrage Bot",
    network: "Base",
    status: "Running"
  });
});

app.get("/history", (req, res) => {
  res.json(getTrades());
});

async function scan() {
  const prices = await getPrices();
  const opportunity = findArbitrage(prices);

  if (
    opportunity &&
    Number(opportunity.profitPercent) >= config.minProfitPercent
  ) {
    const result = await executeTrade(opportunity);

    if (result.success) {
      saveTrade({
        ...opportunity,
        txHash: result.txHash
      });
    }
  }
}

setInterval(scan, config.updateInterval);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Bot started on port ${PORT}`);
});
require("./botRunner");
require("./mainBot");
require("./monitor");
