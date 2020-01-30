const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const port = 3000;


const albumsRouter = require("./routes/albums.js")
const commentsRouter = require("./routes/comments.js")
const picturesRouter = require("./routes/pictures.js")
const postsRouter = require("./routes/posts.js")
const usersRouter = require("./routes/users")

app.use("/albums", albumsRouter)
app.use("/comments", commentsRouter)
app.use("/pictures", picturesRouter)
app.use("/posts", postsRouter)
app.use("/users", usersRouter)

app.get("/", (req,res) => {
    res.json({

     })
})

app.post("/", (req, res) => {
    res.json({

    })
})

app.listen(port, () => {
    console.log("App is listening on port", port)
})