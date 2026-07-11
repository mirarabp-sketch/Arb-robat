const { scanBase } = require("./baseScanner");
const { getAerodromeQuote } = require("./aerodromeScanner");
const { ethers } = require("ethers");

async function getPrices() {
    const prices = [];

    try {
        const uni = await scanBase();

        if (uni) {
            prices.push({
                exchange: "Uniswap",
                price: Number(ethers.formatUnits(uni, 6))
            });
        }

        const aero = await getAerodromeQuote();

        if (aero) {
            prices.push({
                exchange: "Aerodrome",
                price: Number(ethers.formatUnits(aero, 6))
            });
        }

        return prices;
    } catch (err) {
        console.error(err);
        return [];
    }
}

module.exports = {
    getPrices
};
