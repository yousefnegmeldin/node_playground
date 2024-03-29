if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
var path = require("path");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializedPassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");
initializedPassport(passport, (email) =>
  users.find((user) => user.email === email)
);

const PORT = 4000;

const users = [];

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "yousef" });
});

app.get(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

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
