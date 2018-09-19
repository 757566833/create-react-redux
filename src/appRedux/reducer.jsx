const reducer = (state, action) => {
    switch (action.type) {
        case 'Header':
            switch (action.func) {
                case 'setDefaultChild':
                    return {
                        ...state,
                        defaultChild: action.defaultChild
                    };
                case 'setPhoneNumber':
                    return {
                        ...state,
                        phoneNumber: action.phoneNumber
                    };
                case 'setChildrenList':
                    return {
                        ...state,
                        childrenList: action.childrenList
                    };
                default:
                    return state;
            }
        case 'HomePage':
            switch (action.func) {
                case 'setDefaultChild':
                    return {
                        ...state,
                        defaultChild: action.defaultChild
                    };
                default:
                    return state;
            }
        case 'Income':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'Miner':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'Setting':
            switch (action.func) {
                case 'setChildrenList':
                    return {
                        ...state,
                        childrenList: action.childrenList
                    };
                case 'setBalance':
                    return {
                        ...state,
                        balance: action.balance
                    };
                default:
                    return state;
            }
        case 'Withdraw':
            switch (action.func) {
                case 'setBalance':
                    return {
                        ...state,
                        balance: action.balance
                    };
                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export default reducer;

