const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => console.log("Server running on port ", port));