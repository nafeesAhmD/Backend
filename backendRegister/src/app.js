require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db');
const authRouter = require('./router/auth.router');

const app = express();

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/api/auth', authRouter);

module.exports = app;  