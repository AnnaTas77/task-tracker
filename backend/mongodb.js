const mongoose = require("mongoose");

const connectdb = () =>
    mongoose
        .connect("mongodb://127.0.0.1:27017/myapp")
        .then(() => console.log("Mongo DB connected."))
        .catch("Mongo DB error: ", console.error);

module.exports = connectdb;
