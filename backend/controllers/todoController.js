let Todo = require("../models/todoModel");

let testTodo = new Todo({
    title: "practise coding",
    complete: true,
});

testTodo
    .save()
    .then((doc) => {
        console.log("FROM DB: ", doc);
    })
    .catch((err) => {
        console.error(err);
    });
