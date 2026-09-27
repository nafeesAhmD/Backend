const mongoose = require('mongoose');

const register = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
     role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

const Register = mongoose.model('Register', register)

module.exports = Register