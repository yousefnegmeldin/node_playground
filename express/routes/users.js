const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user List");
});

//make sure to put all static above dynamic routes
router.get("/new", (req, res) => {
  res.send("new user form");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`user with id ${id}`);
});

//this can be helpful for async functions
router.param("id", (req, res, next, id) => {
  console.log("param middleware");
  next();
});

module.exports = router;
