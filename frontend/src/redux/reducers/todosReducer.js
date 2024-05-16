const initialState = {
    todos: [],
};

export const todosReducer = (state = initialState, action) => {
    // console.log("todosReducer received " + action);
    switch (action.type) {
        case "INIT_TODOS":
            return {
                ...state,
                todos: [action.payload],
            };

        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        // case "TOGGLE_TODO":
        //     return {
        //         ...state,
        //         todos: [...state.todos, action.payload],
        //     };

        case "DELETE_TODO":
            return {
                ...state,
                todos: [...state.todos.filter((item) => item !== action.payload)],
            };

        default:
            return state;
    }
};
