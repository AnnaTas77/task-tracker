const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
    const allTodos = await Todo.find();
    return res.status(200).json(allTodos);
};

exports.getTodos = getTodos;
