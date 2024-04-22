import InputField from "./InputField";
import { useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <h1>My To-Do List</h1>
            <InputField />
            {todos.length ? (
                todos.map((todo) => {
                    <div>{todo}</div>;
                })
            ) : (
                <div>The to-do list is empty.</div>
            )}
        </div>
    );
}

export default ToDoList;
