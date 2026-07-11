const { getPrice } = require("./sushiSwap");


async function scanPrice(tokenIn, tokenOut, amount) {

  try {

    const price = await getPrice(
      amount,
      [
        tokenIn,
        tokenOut
      ]
    );


    return {
      tokenIn,
      tokenOut,
      amount,
      price
    };


  } catch (error) {

    return {
      error: error.message
    };

  }

}


module.exports = {
  scanPrice
};
