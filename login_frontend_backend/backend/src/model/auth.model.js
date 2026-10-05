const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "user name is required"],
        trim: true
    },
    email:{
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: [true, "password is required"],
    }
})

const Register = mongoose.model("Register", registerSchema)

module.exports = Register