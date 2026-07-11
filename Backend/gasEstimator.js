const { provider } = require("./provider");


async function estimateGas() {

  try {

    const gasPrice =
      await provider.getFeeData();


    return {
      gasPrice: gasPrice.gasPrice?.toString() || "0",
      maxFeePerGas: gasPrice.maxFeePerGas?.toString() || "0"
    };


  } catch (error) {

    return {
      error: error.message
    };

  }

}


module.exports = {
  estimateGas
};
