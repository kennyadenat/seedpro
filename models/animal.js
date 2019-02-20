const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uniqueValidator = require("mongoose-unique-validator")
const crypto = require("crypto")
const jwt = require("jsonwebtoken");
const authTypes = ['github', 'twitter', 'facebook', 'google'];
const Schema = mongoose.Schema;


const AnimalSchema = new Schema({
  name: {
    type: String
  },
  createdon: {
    type: Date,
    default: Date.now
  },
  class: String,
  hash: String,
  salt: String,
}, {
  timestamps: true
});


AnimalSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");

  return this.hash;
};


AnimalSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};


module.exports = Animal = mongoose.model("Animal", AnimalSchema)