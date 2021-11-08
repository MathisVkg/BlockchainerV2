const axios = require("axios");
const express = require("express");
const router = express.Router()


router.post('/', function (req, res) {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: { 'X-CMC_PRO_API_KEY': '42501420-56b2-4d9d-862f-d46a4bcf6dac' },
    })
        .then(function (response) {
            res.json(response.data.data);
        })
})

module.exports = router