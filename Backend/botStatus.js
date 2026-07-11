let status = {
  running: false,
  lastScan: null,
  trades: 0
};


function startBot() {
  status.running = true;
}


function stopBot() {
  status.running = false;
}


function updateScan() {
  status.lastScan = new Date().toISOString();
}


function getStatus() {
  return status;
}


module.exports = {
  startBot,
  stopBot,
  updateScan,
  getStatus
};
