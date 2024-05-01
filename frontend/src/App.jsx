import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ToDoList from "./components/ToDoList";
import InputField from "./components/InputField";

function App() {
    const [allTodos, setAllTodos] = useState(null);
    const [singleTodo, setSingleTodo] = useState("");
    const [dbUpdated, setDbUpdated] = useState(false);

    // console.log("singleTodo: ", singleTodo);
    const BASE_URL = "http://localhost:3000/";

    const getAllTodos = () => {
        axios
            .get(`${BASE_URL}`)
            .then((res) => {
                // console.log("HERE", res.data);

                setAllTodos(res.data);
            })
            .catch((err) => console.error(err));
    };

    const handleAddTodo = () => {
        axios
            .post(`${BASE_URL}`, {
                title: singleTodo,
            })
            .then((res) => {
                setAllTodos([res.data.title, ...allTodos]);
                setSingleTodo("");
                setDbUpdated(true);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getAllTodos();
        setDbUpdated(false);
    }, [dbUpdated]);

    return (
        <div>
            <h1>My To-Do List</h1>
            <InputField handleAddTodo={handleAddTodo} singleTodo={singleTodo} setSingleTodo={setSingleTodo} />
            <ToDoList allTodos={allTodos} />
        </div>
    );
}

export default App;
