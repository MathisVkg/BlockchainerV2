const express = require("express");
const axios = require("axios");
const router = express.Router()
const { Spot } = require('@binance/connector')
    // const apiKey = ''
    // const apiSecret = ''
    const apiKey = 'n6r2pKPOWD0JUq0nd6kiPmXYvLD4E99QeevDq02zLlPyCu5IO9Bnv4jATgcoFrpx'
    const apiSecret = 'STlK6PFIyn5xRzS60ho8YB3gA7VbAuolKtKSBcPWjvD4TSZDOKj8D4uRfKw1h9mE'

router.post('/data', function (req, res) {
    const apiKey = req.body.apiKey
    const apiSecret = req.body.apiSecret
    console.log(apiKey)
    console.log(apiSecret)

})

router.get('/', async function (req, res) {
//     // const apiKey = req.body.apiKey
//     // const apiSecret = req.body.apiSecret
    const client = new Spot(apiKey, apiSecret)

    const result = await client.account()//.then(response => client.logger.log(response.data))

<<<<<<< HEAD
    return res.send(JSON.stringify(result.data));
=======
    // const result = await axios.get('https://api.binance.com/sapi/v1/system/status', {
    //         headers: {
    //             'X-MBX-APIKEY': 'n6r2pKPOWD0JUq0nd6kiPmXYvLD4E99QeevDq02zLlPyCu5IO9Bnv4jATgcoFrpx',
    //             //'HMAC-SHA256': 'STlK6PFIyn5xRzS60ho8YB3gA7VbAuolKtKSBcPWjvD4TSZDOKj8D4uRfKw1h9mE'
    //         }
    //     }
    // )
    // console.log(result)
    return res.send(result.data)
>>>>>>> 430985eb83ad29f0616ad9183ae95a742d6fd12f
})

module.exports = router