import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ToDoList from "./components/ToDoList";
import InputField from "./components/InputField";
// import store from "./redux/store";
import { useDispatch } from "react-redux";

function App() {
    const [singleTodo, setSingleTodo] = useState("");
    // const [dbUpdated, setDbUpdated] = useState(false);

    const BASE_URL = "http://localhost:3000";

    const dispatch = useDispatch();

    const getAllTodos = () => {
        axios
            .get(`${BASE_URL}/`)
            .then((res) => {
                dispatch({ type: "INIT_TODOS", payload: res.data });
            })
            .catch((err) => console.error(err));
    };

    const handleAddTodo = () => {
        axios
            .post(`${BASE_URL}/`, {
                title: singleTodo,
            })

            .catch((err) => {
                console.error(err);
            });

        dispatch(addTodo(singleTodo));
    };

    function addTodo(todo) {
        // console.log("Redux add todo", todo);
        return { type: "ADD_TODO", payload: todo };
    }

    const toggleTodoStatus = (todo) => {
        axios.patch(`${BASE_URL}/${todo._id}`, { completed: todo.completed }).catch((err) => console.error(err));

        //dispatch({type: "TOGGLE_TODO"})
    };

    // function toggleTodo(todo) {
    //     return { type: "TOGGLE_TODO", payload: todo };
    // }

    const handleDelete = (todo) => {
        axios.delete(`${BASE_URL}/${todo._id}`).catch((err) => console.error(err));

        dispatch(deleteTodo(singleTodo));
    };

    function deleteTodo(todo) {
        return { type: "DELETE_TODO", payload: todo };
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    return (
        <section>
            <h1>My To-Do List</h1>
            <InputField handleAddTodo={handleAddTodo} singleTodo={singleTodo} setSingleTodo={setSingleTodo} />
            <ToDoList toggleTodoStatus={toggleTodoStatus} handleDelete={handleDelete} />
        </section>
    );
}

export default App;
