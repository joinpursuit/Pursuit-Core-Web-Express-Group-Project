const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 3000
const app = express()
const postsRouter = require("./routes/posts/posts.js")
const picturesRouter = require("./routes/pictures/pictures.js")

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/posts", postsRouter)
app.use("/pictures", picturesRouter)

app.listen(port, () => {
  console.log("The server is currently running on port " + port)
})