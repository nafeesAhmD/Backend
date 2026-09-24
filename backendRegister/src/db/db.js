const mongoose = require('mongoose')
require('dotenv').config()

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected Successfully')
    }catch(error){
        console.error('Error connecting to MongoDB:', error)
    }
}

module.exports = connectDB