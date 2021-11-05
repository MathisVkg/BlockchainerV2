const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();

// app.use(express.json)
// app.use(cors())

// axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//     headers: { 'X-CMC_PRO_API_KEY': '42501420-56b2-4d9d-862f-d46a4bcf6dac' }
// })
//     .then(function (response) {
//         console.log(response);
//     })

app.get('/', function (req, res) {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: { 'X-CMC_PRO_API_KEY': '42501420-56b2-4d9d-862f-d46a4bcf6dac' }
    })
        .then(function (response) {
            res.send(response.data.data);
        })
})

app.listen(3000)