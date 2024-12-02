const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors =  require('cors');
const app = express();

app.use(cors());// set up cors


app.get('/',(req, res)=>{
    res.send('Hello saurav');
});


module.exports = app;
