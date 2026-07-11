require("dotenv").config();


module.exports = {

  RPC_URL: process.env.BASE_RPC_URL,

  PRIVATE_KEY: process.env.PRIVATE_KEY,

  SUSHISWAP_ROUTER:
    process.env.SUSHISWAP_ROUTER,

  DEGEN_ADDRESS:
    process.env.DEGEN_ADDRESS,

  USDC_ADDRESS:
    process.env.USDC_ADDRESS

};
