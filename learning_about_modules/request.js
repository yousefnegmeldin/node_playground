const encrypt = (data) => {
  return "encrypted data";
};

const send = (url, data) => {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
};

module.exports = {
  send,
};

//exporting can also be done this way

module.exports.REQ_TIMEOUT = 1000;
//module.exports.VARIABLE_NAME or FUNCTION_NAME
