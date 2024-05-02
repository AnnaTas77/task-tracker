const express = require("express");
const cors = require("cors");
const connectdb = require("./mongodb");
const { getTodos, createTodo, updateTodoStatus, deleteTodo } = require("./controllers/todoController");
const Todo = require("./models/todoModel");

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", getTodos);
app.post("/", createTodo);
app.patch("/:id", updateTodoStatus);
app.delete("/:id", deleteTodo);

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

//sudo systemctl start mongod
