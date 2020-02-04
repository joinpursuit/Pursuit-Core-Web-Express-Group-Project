const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

const betsRouter = require("./routes/bets/bets");
const postsRouter = require("./routes/posts/posts");
const sportsRouter = require("./routes/sports/sports");
const usersRouter = require("./routes/users/users");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use("/bets", betsRouter);
app.use("/posts", postsRouter);
app.use("/sports", sportsRouter);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
    if(err.status) res.status(err.status).json(err);
    else res.json(err);
})

app.get("*", (req, res) => {
    res.json({error: "no route found"})
})

app.listen(port, () => console.log("Listening on port ", port));