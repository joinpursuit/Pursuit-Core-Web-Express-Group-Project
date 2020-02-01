const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users/usersroutes.js");
const likesRouter = require("./routes/likes/likesroutes");
const commentsRouter = require("./routes/comments/commentsroutes");
const albumsRouter = require("./routes/albums/albums");
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/likes", likesRouter);
app.use("/comments", commentsRouter);
app.use("/users", usersRouter);
app.use("/albums", albumsRouter);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
