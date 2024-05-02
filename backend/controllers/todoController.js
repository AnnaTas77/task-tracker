const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
    console.log("test");
    const allTodos = await Todo.find();
    return res.status(200).json(allTodos);
};

const createTodo = async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        complete: false,
    });

    await todo.save();

    res.json(todo);
};

const updateTodoStatus = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    todo.save();
    res.json(todo);
};

const deleteTodo = async (req, res) => {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deleteTodo);
};

module.exports = { getTodos, createTodo, updateTodoStatus, deleteTodo };
