const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users/usersroutes.js");
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
