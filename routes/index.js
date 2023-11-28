const express = require('express')
const router = express.Router()

// Get home page
router.route("/", (req, res) => {
    res.send("Hello App!")
})

module.exports = router