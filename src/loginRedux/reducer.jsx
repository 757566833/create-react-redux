// 整个项目初始状态、触发事件以后更改状态函数 存在这里


const reducer = (state, action) => {
    switch (action.type) {
        case 'Login':
            switch (action.func) {
                case 'setMobile':
                    return {
                        ...state,
                        mobile: action.mobile
                    };
                case 'setPassword':
                    return {
                        ...state,
                        password: action.password
                    };
                case 'setInfo':
                    return {
                        ...state,
                        info: action.info
                    };
                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export default reducer;

