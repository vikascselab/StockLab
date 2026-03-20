const { model } = require("mongoose");

const { userSchema } = require("../schemas/UserSchema");

const UsersModel = new model("User", userSchema);