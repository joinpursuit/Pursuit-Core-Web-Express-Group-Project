const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const albumsRouter = require("./routes/albums.js")
const commentsRouter = require("./routes/comments.js")
const picturesRouter = require("./routes/pictures.js")
const postsRouter = require("./routes/posts.js")
const usersRouter = require("./routes/users.js")
const likesRouter = require("./routes/likes")

app.use("/albums", albumsRouter)
app.use("/comments", commentsRouter)
app.use("/pictures", picturesRouter)
app.use("/posts", postsRouter)
app.use("/users", usersRouter)
app.use("/likes", likesRouter)

app.get("/", (req,res) => {
    res.json({
            random: "this is a GET"
     })
})

app.post("/", (req, res) => {
    res.json({
        random: "this is a POST"
    })
})

app.listen(port, () => {
    console.log("App is listening on port", port)
})