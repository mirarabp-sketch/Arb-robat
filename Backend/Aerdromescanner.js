const { ethers } = require("ethers");
const { provider } = require("./wallet");
const contracts = require("./contracts");

const routerAbi = [
  "function getAmountsOut(uint256 amountIn,(address,address,bool)[] routes) external view returns (uint256[] memory)"
];

const router = new ethers.Contract(
  contracts.ROUTERS.Aerodrome,
  routerAbi,
  provider
);

async function getAerodromeQuote() {
  try {
    const amountIn = ethers.parseUnits("1", 18);

    const routes = [
      {
        from: contracts.DEGEN,
        to: contracts.USDC,
        stable: false
      }
    ];

    const amounts = await router.getAmountsOut(amountIn, routes);

    return amounts[amounts.length - 1];
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = {
  getAerodromeQuote
};
