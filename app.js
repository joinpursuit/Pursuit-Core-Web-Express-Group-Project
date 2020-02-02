const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const userRouter = require('./routes/users/users.js')
const likesRouter = require('./routes/likes/likes.js')
const postRouter = require('./routes/posts/post.js')
const commentRouter = require('./routes/comments/comment.js')
const albumsRouter = require('./routes/albums/albums.js')
const picturesRouter = require('./routes/pictures/pictures.js')
const preferencesRouter = require('./routes/preferences/preferences.js')

const port = 3000;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use("/users", userRouter)
app.use("/likes", likesRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)
app.use("/albums", albumsRouter)
app.use("/pictures", picturesRouter)
app.use("/preferences", preferencesRouter)



app.listen(port, () => {
    console.log("listening on port: ", port)
});


