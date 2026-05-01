const initialstate = {
    todos: [] 
    // FIX: todo -> todos (same naming everywhere)
};

export const todoreducer = (state = initialstate, action) => {
    switch (action.type) {

        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, { 
                    id: Date.now(), 
                    text: action.payload, 
                    completed: false 
                }]
                // FIX: state.todo -> state.todos
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
                // FIX: compeleted spelling wrong tha → completed
            };

        default:
            return state;
    }
};

export default todoreducer; 
// FIX: reducer undefined tha → todoreducer export kiya