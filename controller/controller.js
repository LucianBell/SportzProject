const User = require("../models/userAccount");

const renderHome = (req, res) => {
  res.render("../views/index");
};

const renderRegister = (req, res) => {
  res.render("../views/register");
};

const registerUser = async (req, res) => {
  const user = req.body;

  try {
    await User.create(user);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  renderHome,
  renderRegister,
  registerUser,
};
