const reducer = (state, action) => {
    switch (action.type) {
        case 'Header':
            switch (action.func) {
                case 'setDefaultChild':
                    return {
                        ...state,
                        defaultChild: action.defaultChild
                    };
                default:
                    return state;
            }
        case 'Menus':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'ArticleList':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'SearchHeader':
            switch (action.func) {
                
                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export default reducer;

