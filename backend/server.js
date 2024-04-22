const express = require("express");
const cors = require("cors");
const connectdb = require("./mongodb");

const app = express();
connectdb();

const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
