const axios = require("axios");
const express = require("express");
const router = express.Router()

const currency = '&currency=USD'

router.get('/:cryptoid', async function (req, res) {
    const crypto = req.params.cryptoid
    const result = await axios.get(`https://api.coinstats.app/public/v1/coins/${crypto}?currency=USD`)
    return res.send(JSON.stringify(result.data))
})


module.exports = router