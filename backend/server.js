const express = require("express");
const cors = require("cors");
const connectdb = require("./mongodb");
const { getTodos, createTodo, deleteTodo, toggleTodoStatus } = require("./controllers/todoController");
const Todo = require("./models/todoModel");

const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//     res.send("HELLOOO!!!");
// });

app.get("/", getTodos);

const start = async () => {
    try {
        await connectdb();
        app.listen(port, () => console.log(`Server is running on port ${port}.`));

        // let testTodo = new Todo({
        //     title: "Practise coding",
        //     complete: true,
        // });

        // testTodo
        //     .save()
        //     .then((doc) => {
        //         console.log("FROM DB: ", doc);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    } catch (error) {
        console.error(error);
        // process.exit(1);
    }
};

start();
