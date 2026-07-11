require("dotenv").config();

const express = require("express");
const cors = require("cors");

const apiRoutes = require("./apiRoutes");
const { startBot } = require("./botStatus");

const app = express();


app.use(cors());
app.use(express.json());


// API Routes
app.use("/api", apiRoutes);


// Main page
app.get("/", (req, res) => {

  res.json({
    bot: "DEGEN Arbitrage Bot",
    network: "Base",
    status: "Running"
  });

});


// Start bot status
startBot();


const PORT =
  process.env.PORT || 3000;


app.listen(PORT, () => {

  console.log(
    `Bot started on port ${PORT}`
  );

});
