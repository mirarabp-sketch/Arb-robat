const {
  startBot,
  stopBot
} = require("./botStatus");


function start() {

  startBot();

  return {
    message: "Bot started"
  };

}


function stop() {

  stopBot();

  return {
    message: "Bot stopped"
  };

}


module.exports = {
  start,
  stop
};
