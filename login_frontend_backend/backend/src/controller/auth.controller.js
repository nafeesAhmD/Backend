const Register = require("../model/auth.model");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Register({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }catch (error) {
        res.status(400).json({ message: error.message });           

    }   

};

// login functionality

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Register.findOne({ email });
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid email or password"});
        }

        const token = jwt.sign(
            {id: user._id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )
        res.status(200).json({message:"Login successful", 
            token,
            user:{
                id: user._id,
                name: user.name,
                email: user.email
            }

        });

    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { registerUser, loginUser };