const dotenv = require("dotenv")
dotenv.config()
const { MongoClient } = require("mongodb")

MongoClient.connect(process.env.CONNECTIONSTRING, function(err, client) {
    if (err) {
        console.log(err)
    }
    module.exports = client
    const app = require("./app")
})