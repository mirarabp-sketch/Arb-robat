function checkPrivateKey(key) {

  if (!key || key.length < 20) {
    return false;
  }

  return true;
}


module.exports = {
  checkPrivateKey
};
