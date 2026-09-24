const Register = require('../model/register.model')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const existingUser = await Register.findOne({ email })
        if(existingUser) {
            return res.status(409).json({ message: 'User already exists' })
        }

        const hash = await bcrypt.hash(password, 10)
        const user = new Register({ name, email, password: hash })
        await user.save() 
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { registerUser }