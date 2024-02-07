// const express = require("express");
import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//using ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("index", { text: "World" });
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.post("/user", (req, res) => {
  res.send("Got a post request at /user");
  // console.log(req.body);
  // userArray.push(req.body);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//i have to use http here for it to work with node-fetch
// const response = await fetch("http://localhost:3030/user", {
//   method: "POST",
//   body: JSON.stringify({ name: "John Doe" }),
//   headers: { "Content-Type": "application/json" },
// });
