// const { model } = require("mongoose");

// const { userSchema } = require("../schemas/UserSchema");

// const UsersModel = new model("User", userSchema);

// module.exports = { UsersModel };


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("User", userSchema);