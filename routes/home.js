const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
    console.log("Passed /")
    res.render("home")
})

router.get("/nitro", (req, res, next) => {
    res.render("nitro")
})

module.exports = router
