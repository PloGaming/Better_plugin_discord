const express = require("express")
const path = require("path")
const home = require("./routes/home")

const app = express()

const port = process.env.PORT || 3000

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.use(home)
app.use(express.static(path.join(__dirname, "public")))

app.get("*", (req, res) => {
    res.send("Cannot find the page")
})

app.listen(port)