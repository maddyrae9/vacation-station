const { User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", { user: req.session.user });
});

router.get("/register", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.send(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (!dbUserData) {
      res.status(400).send("No user with that email address!");
      return;
    } else {
      req.session.user = dbUserData;
      res.send("success");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
