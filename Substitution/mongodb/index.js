const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectMongoDB = require("./db/mongodb.js");
const userSchema = require("./schema/user.js");

const app = express()
dotenv.config()

connectMongoDB()
app.use(express.json())
// Middleware
// Allow trafic from all origin
app.use(cors({
    origin: "*",
    methods: "POST,UPDATE",
    credentials: true  // allow cookies
}))

app.get("/status", async (req, res) => {

    const newUser = new userSchema({
        name: "John Doe",
        email: "zeeshanali90233@gmail.com"
    })

    await newUser.save();

    res.send("I am working")
})
app.get("/user/get", (req, res) => {
    res.send("I am working")
})

app.listen(5050, () => {
    console.log("Server is running on port 5050")
})