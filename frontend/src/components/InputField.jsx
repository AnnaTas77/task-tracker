function InputField({ singleTodo, setSingleTodo, handleAddTodo }) {
    return (
        <div>
            <input type="text" value={singleTodo} onChange={(e) => setSingleTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default InputField;
