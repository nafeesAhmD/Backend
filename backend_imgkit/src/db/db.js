const mongoose = require('mongoose');

async function connectDB(){

    await mongoose.connect('mongodb://localhost:27017/imagekit_db');

    console.log("connected to db")
}

module.exports = connectDB;

// mongodb+srv://nafeesahmed6760_db_user:Qf9uyqrMUqFHyQNL@cluster0.julwmp2.mongodb.net/?appName=Cluster12
