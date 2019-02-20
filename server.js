const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  cookieSession = require("cookie-session"),
  keys = require("./config/keys");

const Animal = require('./models/animal');

const app = express();

//Setup Cookie
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.mongoURL, {
  useNewUrlParser: true
}, () => {
  console.log('Database Connected')
});

mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
  res.send("Welcome to the Home Page");

  const anim = new Animal({
    name: "Cougar",
    class: "Wild Cats"
  })

  const password = anim.setPassword(anim.name);
  console.log(password);
  // anim.validPassword(function (password, cb) {
  //   console.log(cb)
  // });

  // anim.save(function (err) {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
})

app.listen(keys.port, () => {
  console.log(`Server started on port`, keys.port);
});