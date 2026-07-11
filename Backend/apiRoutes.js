const express = require("express");
const { getStatus } = require("./botStatus");
const { getHistory } = require("./tradeHistory");

const router = express.Router();


router.get("/bot-status", (req, res) => {

  res.json(
    getStatus()
  );

});


router.get("/trades", (req, res) => {

  res.json(
    getHistory()
  );

});


module.exports = router;
