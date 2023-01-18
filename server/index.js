require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./DB/db.js');

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("hello world!");
})

app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
});