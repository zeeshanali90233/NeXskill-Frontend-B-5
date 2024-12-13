const mongoose = require("mongoose");

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectMongoDB;