require("dotenv").config();

const { provider } = require("./provider");


async function test() {

  try {

    const network =
      await provider.getNetwork();


    const block =
      await provider.getBlockNumber();


    console.log("Network:", network.name);
    console.log("Chain ID:", network.chainId.toString());
    console.log("Latest Block:", block);


  } catch (error) {

    console.log(
      "Connection Error:",
      error.message
    );

  }

}


test();
