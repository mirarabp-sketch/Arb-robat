const { getDEGENPrice } = require("./priceEngine");

async function test() {

  const price = await getDEGENPrice();

  if (price) {
    console.log("DEGEN PRICE:");
    console.log(price);
  } else {
    console.log("No price received");
  }

}

test();
