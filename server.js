const cookieParser = require("cookie-parser")
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000

app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get("/dark-mode", (req,res) => {
    res.cookie("theme", "dark-mode")
    res.status(200).json({
        message: "Dark mode Cookie saved"
    })
})

app.get("/light-mode", (req,res) => {
    res.cookie("theme", "light-mode")
    res.status(200).json({
        message: "Light mode Cookie saved"
    })
})

app.listen(PORT, () => {
    console.log("[Server] on PORT 5000")
})

