//ecmascript destructuring
const { get } = require("https");

const req = get("https://www.google.com", (res) => {
  //event listener for the response event
  res.on("data", (chunk_data) => {
    console.log(chunk_data.toString());
  });
});

//this will cause request to be sent.
req.end();
