const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")


const port = 3000;
const app = express();


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