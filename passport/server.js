const express = require("express");
var path = require("path");
const app = express();
const bcrypt = require("bcrypt");
const PORT = 3000;

const users = [];

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "yousef" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      email: req.body.email,
      password: hashedPass,
    });
    res.redirect("/login");
  } catch (err) {
    res.redirect("/register");
  }
  console.log(users);
});

app.listen(PORT, () => {
  console.log(`successfully connected to server at port ${PORT}`);
});
