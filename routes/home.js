const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
    console.log("Passed /")
    res.render("home")
})

module.exports = router
