const express = require("express");
const cors = require("cors");
//const axios = require("axios")
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const postsRouter = require("../routes/posts/posts.js")

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/posts", postsRouter);


app.listen(port, ()=> {
    console.log("you are on port ", port)
})