const fs = require("fs");
const path = require("path");


const file = path.join(
  __dirname,
  "../database/transactions.json"
);


function saveTransaction(tx) {

  let list = [];

  if (fs.existsSync(file)) {
    list = JSON.parse(
      fs.readFileSync(file, "utf8")
    );
  }


  list.push({
    id: Date.now(),
    time: new Date().toISOString(),
    ...tx
  });


  fs.writeFileSync(
    file,
    JSON.stringify(list, null, 2)
  );
}


function getTransactions() {

  if (!fs.existsSync(file)) {
    return [];
  }


  return JSON.parse(
    fs.readFileSync(file, "utf8")
  );

}


module.exports = {
  saveTransaction,
  getTransactions
};
