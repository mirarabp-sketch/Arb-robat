const { startBot } = require("./botStatus");
const { startScanner } = require("./scanner");


async function start() {

  console.log("DEGEN Bot Starting...");


  startBot();


  startScanner();


}


module.exports = {
  start
};
