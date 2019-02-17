const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20');

const keys = require('./keys').google;
const User = require('../models/user');



module.exports = function () {

  //Serialize Sessions
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user)
    });
  })

  //Use Local Strategy


  //Facebook Session

  //Twitter Session

  //Github Session

}