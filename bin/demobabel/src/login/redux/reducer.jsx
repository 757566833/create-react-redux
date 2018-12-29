const reducer = (state, action) => {
    switch (action.type) {
        case 'Header':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'Content':
            switch (action.func) {
                case 'setUsername':
                    return {
                        ...state,
                        username: action.username
                    };
                default:
                    return state;
            }
        case 'Footer':
            switch (action.func) {
                case 'setUsername':
                    return {
                        ...state,
                        username: action.username
                    };
                case 'setPassword':
                    return {
                        ...state,
                        password: action.password
                    };
                default:
                    return state;
            }
        case 'IndexView':
            switch (action.func) {
                case 'setUsername':
                    return {
                        ...state,
                        username: action.username
                    };
                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export default reducer;

