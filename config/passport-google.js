const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20');

const keys = require('./keys').google;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
})

passport.use(new GoogleStrategy({
  // options for the strategy
  callbackURL: "/auth/google/redirect",
  clientID: keys.clientID,
  clientSecret: keys.clientSecret

}, (accessToken, refreshToken, profile, done) => {
  // passport callback verify functions
  const newUser = new User({
    name: profile.displayName,
    googleId: profile.id,
    image: profile.photos[0].value
  });

  User.findOne({
    googleId: newUser.googleId
  }).then(users => {
    if (!users) {
      newUser.save().then(response => {
        done(null, response);
      });
    } else {
      console.log("User already exists");
      console.log(users);
      done(null, users);
    }
  });
}))