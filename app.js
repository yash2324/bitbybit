const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Updated path to the User model

const app = express();

// ... Other configurations

// Login route
app.post('./SIH/login-page-app/views/login.ejs', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = await User.findOne({ username });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.send('Invalid username or password');
  }

  // Store user information in the session
  req.session.user = user;

  // Redirect to the home page or any other desired page
  res.redirect('./SIH/login-page-app/views/account.ejs');
});

// ... Other routes
// ... Other routes

// Start your server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
