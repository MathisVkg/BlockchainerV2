const mongoose = require("mongoose")
const dotenv = require("dotenv")
const path = require("path");
dotenv.config()

const UserSchema = require('./models/User')
const user = new UserSchema({username: 'Peppe', email: 'test@test.tes', password: 'azerty'})

const url = process.env.DB_URI

mongoose.connect(url)

try {
    user.save()

} catch (err) {
    console.log(err)
}