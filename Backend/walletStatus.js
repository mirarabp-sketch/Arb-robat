const { provider } = require("./wallet");


async function getWalletStatus(address) {

  try {

    const balance = await provider.getBalance(address);


    return {
      address,
      ethBalance: balance.toString()
    };


  } catch (error) {

    return {
      error: error.message
    };

  }

}


module.exports = {
  getWalletStatus
};
