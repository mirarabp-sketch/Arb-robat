const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../database/trades.json");

function saveTrade(trade) {
  let trades = [];

  if (fs.existsSync(filePath)) {
    trades = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  trades.push({
    time: new Date().toISOString(),
    ...trade
  });

  fs.writeFileSync(filePath, JSON.stringify(trades, null, 2));
}

function getTrades() {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

module.exports = {
  saveTrade,
  getTrades
};
