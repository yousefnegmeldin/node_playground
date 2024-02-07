// const express = require("express");
import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 3030;

let userArray = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
  res.body(JSON.stringify(userArray));
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.post("/user", (req, res) => {
  res.send("Got a post request at /user");
  // console.log(req.body);
  userArray.push(req.body);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const response = await fetch("http://localhost:3030/user", {
  method: "POST",
  body: JSON.stringify({ name: "John Doe" }),
  headers: { "Content-Type": "application/json" },
});

console.log(response);
