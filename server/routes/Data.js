const axios = require("axios");
const express = require("express");
const router = express.Router()


// router.get('/', async function (req, res) {
//     const result = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//         qs: {
//             'start': '1',
//             'limit': '1000',
//             'convert': 'EUR'
//         },
//         headers: { 'X-CMC_PRO_API_KEY': '42501420-56b2-4d9d-862f-d46a4bcf6dac' },
//     })
//     return res.json(result.data.data);
// })
const currency = '&currency=USD'

router.get('/', async function (req, res) {
    const result = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=200' + currency, {
        headers: {}
    }
)
    // console.log(result)
    // return res.send(result);
    return res.send(JSON.stringify(result.data))
})

// router.get('/convert', async function (req, res) {
//     const result = await axios.get('https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1', {
//         value: [1,27],
//         headers: { 'X-CMC_PRO_API_KEY': '42501420-56b2-4d9d-862f-d46a4bcf6dac' },
//     })
//     return res.json(result.data.data);
// })



module.exports = router