import axios from "axios";

function ToDoList({ allTodos }) {
    return (
        <>
            {allTodos ? (
                allTodos.map((todo) => {
                    // console.log("TODO", todo.title);
                    return <div key={todo._id}>{todo.title}</div>;
                })
            ) : (
                <p>The to-do list is empty.</p>
            )}
        </>
    );
}

export default ToDoList;
