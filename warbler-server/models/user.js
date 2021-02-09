const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// bcrypt password hashing

const userSchema = new mongoose.Schema({
  // that they have an email and that it's unique make sure
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  }
});

// create a Model
const User = mongoose.model("User", userSchema);

// export our User Model

// now we can create, query, update, etc...

module.exports = User;
