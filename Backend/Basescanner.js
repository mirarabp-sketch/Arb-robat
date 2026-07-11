const { ethers } = require("ethers");
const { getPrice } = require("./uniswap");
const contracts = require("./contracts");

async function scanBase() {
    try {
        const amountIn = ethers.parseUnits("1", 18);

        const path = [
            contracts.DEGEN,
            contracts.USDC
        ];

        const result = await getPrice(amountIn, path);

        if (result) {
            console.log("DEGEN Price:", result[result.length - 1].toString());
            return result[result.length - 1];
        }

        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}

module.exports = {
    scanBase
};
