const { ethers } = require("ethers");
const { provider } = require("./wallet");

const ROUTER = "ROUTER_ADDRESS";

const routerAbi = [
  "function getAmountsOut(uint256 amountIn, tuple(address from,address to,bool stable)[] routes) external view returns (uint256[] memory)"
];

const router = new ethers.Contract(
  ROUTER,
  routerAbi,
  provider
);

async function getAerodromePrice(amountIn, tokenIn, tokenOut) {
  try {
    const routes = [
      {
        from: tokenIn,
        to: tokenOut,
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
  getAerodromePrice
};
