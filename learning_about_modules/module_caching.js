const { send } = require("./request");
const { REQ_TIMEOUT } = require("./request");

send("https://www.google.com", "some data");
