const express = require('express');
const session = require('express-session');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
require('dotenv').config({ path: './server/.env' }); // Optional if you store your API keys in a .env file
console.log('Your Steam API Key:', process.env.STEAM_API_KEY);

const app = express();
const PORT = 3001; // Your backend runs separately from Parcel

// Session setup (required for Passport)
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Steam strategy setup
passport.use(new SteamStrategy({
    returnURL: 'http://localhost:3001/auth/steam/return',
    realm: 'http://localhost:3001/',
    apiKey: process.env.STEAM_API_KEY
  },
  function(identifier, profile, done) {
    // Here you would normally save user data to a database - MAYBE LOOK INTO LATER CONSIDERING WE ARE USING FIRESTORE FOR DATABASE???????
    return done(null, profile);
  }
));

// Passport session serialization
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Routes
app.get('/', (req, res) => res.send('Server is running.'));

app.get('/auth/steam',
  passport.authenticate('steam'),
  (req, res) => {} // Will redirect to Steam
);

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication
    res.redirect(`http://localhost:1234?steamid=${req.user.id}`);
  }
);

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
