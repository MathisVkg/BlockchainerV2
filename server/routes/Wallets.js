const express = require("express");
const axios = require("axios");
const router = express.Router()

router.post('/', async function (req, res) {
    const result = await axios.get('https://api.binance.com/sapi/v1/fiat/payments', {
            headers: {}
        }
    )
    return res.send(JSON.stringify(result.data))
})
module.exports = router