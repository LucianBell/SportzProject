const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  cnpj: {
    type: String,
    require: true,
    maxLength: 14,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
