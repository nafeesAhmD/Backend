const express = require('express')
const cors = require('cors')   

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));



const authRouter = require('./router/auth.router')
app.use(express.json())

app.use('/api/auth', authRouter)

module.exports = app

