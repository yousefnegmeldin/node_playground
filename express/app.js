// import fetch from "node-fetch";
const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

//using ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users.js");

//middleware for nested routers
app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(port);

//i have to use http here for it to work with node-fetch
// const response = await fetch("http://localhost:3030/user", {
//   method: "POST",
//   body: JSON.stringify({ name: "John Doe" }),
//   headers: { "Content-Type": "application/json" },
// });
