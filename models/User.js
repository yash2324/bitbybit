const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // This makes the username field required
    unique: true, // This enforces uniqueness for usernames
  },
  password: String, // Your password field or any other fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
