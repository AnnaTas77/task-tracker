const initialState = {
    todos: [],
};

export const todosReducer = (state = initialState, action) => {
    console.log("todosReducer : " + action);
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "INIT_TODOS":
            return {
                ...state,
                todos: [action.payload],
            };
        default:
            return state;
    }
};
