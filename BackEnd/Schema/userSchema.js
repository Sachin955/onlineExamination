//init
const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    fistName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String

});

const userModel = mongoose.model('users', userSchema)
module.exports = userModel