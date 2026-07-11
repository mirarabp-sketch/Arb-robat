function handleError(error, location) {

  console.log(
    `[ERROR - ${location}]`
  );

  console.log(
    error.message
  );

}


module.exports = {
  handleError
};
