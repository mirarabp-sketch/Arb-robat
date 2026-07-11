require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        bot: "DEGEN Arbitrage Bot",
        network: "Base",
        status: "Running"
    });
});

app.listen(PORT, () => {
    console.log(`Bot started on port ${PORT}`);
});
