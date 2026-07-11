const { scanPrice } = require("./priceScanner");


async function findOpportunity(
  tokenA,
  tokenB,
  amount
) {

  const result =
    await scanPrice(
      tokenA,
      tokenB,
      amount
    );


  if (result.error) {
    return {
      found: false,
      error: result.error
    };
  }


  return {
    found: true,
    tokenA,
    tokenB,
    price: result.price
  };

}


module.exports = {
  findOpportunity
};
