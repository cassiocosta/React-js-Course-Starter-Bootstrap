let defaultState = {
    todos: []
};

let todoReducer = (state = defaultState, action) => {

    switch (action.type) {
        case "SET_TODO":
            state = {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };        
        break;
        case "REMOVE_TODO":
            state = {
                ...state,
                todos: state.todos.filter(item => item.id != action.payload.id)
            };
        break;
        case "UPDATE_TODO":
            state = {
                ...state,
                todos: state.todos.map(element => {
                    if(element.id === action.payload.id)            
                        element.name = action.payload.newName;

                    return element;
                })
            };
        break;
        case "SET_ALL":
            state = {
                ...state,
                todos: action.payload
            };
        break;
    }
    return state;
};

export default todoReducer;