const express = require('express')

const router = express.Router()

const { registerUser, loginUser } = require('../controller/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')
const authorizeRoles = require('../middleware/authorize.middleware')


router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/admin-only', authMiddleware, authorizeRoles("admin"), (req, res) => {
    res.status(200).json({
        message: "welcome admin! You have special access"
    })
}
)

router.get('/profile',authMiddleware, (req, res) => {
    res.status(200).json({
        message: "you are authenticated!"
    })
})

module.exports = router