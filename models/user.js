const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uniqueValidator = require("mongoose-unique-validator")
const crypto = require("crypto")
const jwt = require("jsonwebtoken");
const authTypes = ['github', 'twitter', 'facebook', 'google'];


const Schema = mongoose.Schema;

var UserSchema = new Schema({

  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "username cannot be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "email cannot be empty"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  firstname: {
    type: String,
    required: [true, "firstname cannot be empty"]
  },
  lastname: {
    type: String,
    required: [true, "lastname cannot be empty"]
  },
  image: String,
  region: String,
  role: String,
  staffid: String,
  staffrole: String,
  googleId: String,
  githubId: String,
  facebookId: String,
  hash: String,
  salt: String,
}, {
  timestamps: true
});


UserSchema.plugin(uniqueValidator, {
  message: "is already taken"
})


UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
}


UserSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
}


UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  })
}


UserSchema.methods.toAuthJson = function () {
  return {
    id: this._id,
    username: this.username,
    email: this.username,
    token: "Bearer " + this.generateJWT(),
    role: this.role,
    staffid: this.staffid,
    staffrole: this.staffrole
  }
}


UserSchema.methods.toProfileJson = function () {
  return {
    username: this.username,
    email: this.username,
    role: this.role,
    staffid: this.staffid,
    staffrole: this.staffrole
  }
}


module.exports = User = mongoose.model('users', UserSchema);