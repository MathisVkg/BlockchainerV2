const express = require("express");
const axios = require("axios");
const router = express.Router()
const { Spot } = require('@binance/connector')
const {json} = require("express");

router.get('/', async function (req, res) {

    const apiKey = 'n6r2pKPOWD0JUq0nd6kiPmXYvLD4E99QeevDq02zLlPyCu5IO9Bnv4jATgcoFrpx'
    const apiSecret = 'STlK6PFIyn5xRzS60ho8YB3gA7VbAuolKtKSBcPWjvD4TSZDOKj8D4uRfKw1h9mE'
    const client = new Spot(apiKey, apiSecret)

// Get account information
    const result = await client.account()//.then(response => client.logger.log(response.data))

    // const result = await axios.get('https://api.binance.com/sapi/v1/system/status', {
    //         headers: {
    //             'X-MBX-APIKEY': 'n6r2pKPOWD0JUq0nd6kiPmXYvLD4E99QeevDq02zLlPyCu5IO9Bnv4jATgcoFrpx',
    //             //'HMAC-SHA256': 'STlK6PFIyn5xRzS60ho8YB3gA7VbAuolKtKSBcPWjvD4TSZDOKj8D4uRfKw1h9mE'
    //         }
    //     }
    // )
    // console.log(result)
    return res.send(result.data)
})
module.exports = router