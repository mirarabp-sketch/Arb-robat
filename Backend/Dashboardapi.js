const express = require("express");
const { getHistory } = require("./tradeHistory");

const router = express.Router();


router.get("/history", (req, res) => {

  const data = getHistory();

  res.json(data);

});


router.get("/status", (req, res) => {

  res.json({
    bot: "DEGEN Arbitrage Bot",
    status: "Running",
    time: new Date().toISOString()
  });

});


module.exports = router;
