const axios = require("axios");
const express = require("express");
const router = express.Router()

const currency = '&currency=USD'

router.get('/', async function (req, res) {
    const result = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=200' + currency, {
        headers: {}
    }
)
    return res.send(JSON.stringify(result.data))
})

// router.post('/register', async function (req, res) {
//     const data = req.body
//     console.log(data)
// })




module.exports = router