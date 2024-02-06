const http = require("http");

http.request("www.google.com", (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
  res.on("data", (data) => {
    console.log(data.toString());
  });
});
