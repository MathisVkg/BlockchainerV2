const axios = require("axios");
const express = require("express");
const router = express.Router()

const currency = '&currency=USD'

router.get('/:cryptoid', async function (req, res) {
    const crypto = useParams(req.params.cryptoid)
})



module.exports = router