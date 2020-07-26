require('dotenv').config();
const mongoose = require('mongoose');

const db_url = process.env.DB_URL;

const myDb = mongoose.connect(db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => console.log("MongoDB connected..."))
    .catch((error) => console.log("connection error", error))

module.exports = myDb






