const mongoose = require("mongoose");

const connectdb = () =>
    mongoose
        .connect("mongodb://127.0.0.1:27017/mytododb")
        .then(() => console.log("Mongo DB connected."))
        .catch((err) => console.error("MongoDB Error - ", err));

module.exports = connectdb;
