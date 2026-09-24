require('dotenv').config();
const express = require('express');
const connectDB = require('./db/db');
const authRouter = require('./router/auth.router');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', authRouter);

module.exports = app;   // ← yahan export karo, listen mat karo