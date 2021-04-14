const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('HITTING AUTH ROUTES')
})

module.exports = router