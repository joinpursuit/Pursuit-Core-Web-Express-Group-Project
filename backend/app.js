const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const albumsRouter = require("./routes/albums/albums");
const postsRouter = require("./routes/posts/posts");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/albums", albumsRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
