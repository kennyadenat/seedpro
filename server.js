const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  cookieSetup = require("cookie-session"),
  keys = require("./config/keys");


const app = express();

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.mongoURL, {
  useNewUrlParser: true
}, () => {
  console.log('Database Connected')
});

app.listen(port, () => {
  console.log(`Server started on port`);
});