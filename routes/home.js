const express = require("express")
const path = require("path")
const router = express.Router()

router.get("/", (req, res, next) => {
    console.log("Passed /")
    res.render("home")
})

router.get("/nitro", (req, res, next) => {
    res.render("nitro")
})

router.get("/.well-known/pki-validation/BD836BF1889C9D9E3B31109CA993929D.txt", (req, res, next) => {
    console.log("No way")
    res.sendFile(path.join(__dirname, "..", "BD836BF1889C9D9E3B31109CA993929D.txt"))
})

module.exports = router
