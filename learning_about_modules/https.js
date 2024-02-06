const { send } = require("./request");
const { read } = require("./response");
const makeRequest = (url, data) => {
  send(url, data);
  return console.log(read());
};

makeRequest("https://www.google.com", "some data");
