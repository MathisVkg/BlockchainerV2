const express = require("express");
const router = express.Router()

router.post('/', async function (req, res) {
    const data = req.body

    console.log(data)
})
module.exports = router