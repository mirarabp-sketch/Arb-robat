let queue = [];


function addTrade(trade) {

  queue.push(trade);

}


function getNextTrade() {

  return queue.shift();

}


function getQueue() {

  return queue;

}


module.exports = {
  addTrade,
  getNextTrade,
  getQueue
};
