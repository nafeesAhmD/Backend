const Register = require('../model/register.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role = "user" } = req.body

        const existingUser = await Register.findOne({ email })
        if(existingUser) {
            return res.status(409).json({ message: 'User already exists' })
        }

        const hash = await bcrypt.hash(password, 10)
        const user = new Register({ name, email, password: hash, role })
        await user.save() 
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function loginUser(req, res) {
    try{
        const { email, password } = req.body

        const user = await Register.findOne({email})

        if(!user){
            return res.status(401).json({
                message: "invalid credential"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
             return res.status(401).json({
                message: "invalid credential"
            })        
        }
        const token = jwt.sign({
            id: user.id,
            role: user.role 
        }, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.cookie("token", token)

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            message: "server error"
        })
    }
}

module.exports = { registerUser, loginUser }