import { useSelector } from "react-redux";

function ToDoList({ toggleTodoStatus, handleDelete }) {
    const todos = useSelector((state) => state.todos.todos);

    // console.log("TODOS in ToDoList: ", todos[0]);

    return (
        <>
            {todos[0] ? (
                todos[0].map((todo) => {
                    // console.log("SINGLE TODO: ", todo);
                    return (
                        <div key={todo._id}>
                            <input
                                type="checkbox"
                                id="checkbox"
                                checked={todo.completed}
                                onChange={() => {
                                    toggleTodoStatus(todo);
                                }}
                            />
                            <label htmlFor="checkbox" className="todo-title">
                                {todo.title}
                            </label>
                            <button
                                onClick={() => {
                                    handleDelete(todo);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })
            ) : (
                <p>The to-do list is empty.</p>
            )}
        </>
    );
}

export default ToDoList;
