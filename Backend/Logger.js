const fs = require("fs");
const path = require("path");


const logFile = path.join(
  __dirname,
  "../database/bot.log"
);


function log(message) {

  const text =
    `[${new Date().toISOString()}] ${message}\n`;

  console.log(text);


  fs.appendFileSync(
    logFile,
    text
  );
}


module.exports = {
  log
};
