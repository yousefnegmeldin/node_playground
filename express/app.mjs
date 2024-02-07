// const express = require("express");
import express from "express";
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.post("/user", (req, res) => {
  res.send("Got a post request at /user");
  console.log(req.body);
});

// function send(data) {
//   fetch("localhost:3030/user", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// send({ name: "John Doe" });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
