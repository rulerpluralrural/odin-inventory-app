const express = require('express')
const router = express.Router()

// Get home page
router.get("/", (req, res) => {
    res.redirect("/category")
})

module.exports = router