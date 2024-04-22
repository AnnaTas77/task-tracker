const express = require("express");
const cors = require("cors");
const connectdb = require("./mongodb");
const { getTodos, createTodo, deleteTodo, toggleTodoStatus } = require("./controllers/todoController");

const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());



const start = async () => {
    try {
        await connectdb();
        app.listen(port, () => console.log(`Server is running on port ${port}.`));
    } catch (error) {
        console.error(error);
        // process.exit(1);
    }
};

start();
