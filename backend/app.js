const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;
const likesRouter = require("./routes/likes/likesroutes");
const commentsRouter = require("./routes/comments/commentsroutes")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/likes", likesRouter);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
