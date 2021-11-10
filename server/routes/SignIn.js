const express = require("express");
const router = express.Router()

const currency = '&currency=USD'

router.post('/', async function (req, res) {
    const data = req.body
    console.log(data)
})


module.exports = router