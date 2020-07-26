// init
require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const mydatabase = require('./database')
const userRouter = require('./Routers/userRouter')


const cors = require("cors");
const { urlencoded } = require('express');
const app = express();


// middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(urlencoded({ extended: true }));
app.use('/api/users/', userRouter)


// defaults routes
app.get('/', function (req, res) {
    return res.json({
        status: true,
        message: "Server page is working...."
    })
})

// start server
const port = process.env.PORT
app.listen(port, function () {
    console.log("Server running at port no: " + port)
})