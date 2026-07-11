const { ethers } = require("ethers");
const { provider } = require("./wallet");
const contracts = require("./contracts");
const routerAbi = require("./abi/routerAbi");

const router = new ethers.Contract(
    contracts.ROUTERS.Uniswap,
    routerAbi,
    provider
);

async function getPrice(amountIn, path) {
    try {
        const amounts = await router.getAmountsOut(amountIn, path);
        return amounts;
    } catch (err) {
        console.error(err);
        return null;
    }
}

module.exports = {
    getPrice
};
