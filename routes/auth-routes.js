const app = require('express').Router();
const passport = require('passport');

const User = require('../models/user');



app.get('/login', (req, res) => {});

app.get('/logout', (req, res) => {});

app.get('/signup', (req, res) => {});

app.post('/profile', passport.authenticate('jwt', {
    session: false
  }),
  function (req, res) {
    res.send(req.user.profile);
  }
);

//Google
app.get('/auth/google',
  passport.authenticate('google'),
  function (req, res) {
    // The request will be redirected to Google for authentication, so
    // this function will not be called.
  });

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// Facebook
app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


//Twitter
app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


//Github
app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


//Instagram
app.get('/auth/instagram',
  passport.authenticate('instagram'));


app.get('/auth/instagram/callback',
  passport.authenticate('instagram', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// LinkedIn
app.get('/auth/linkedin',
  passport.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


module.exports = app;