function ToDoList({ allTodos, toggleTodoStatus, handleDelete }) {
    return (
        <>
            {allTodos ? (
                allTodos.map((todo) => {
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
