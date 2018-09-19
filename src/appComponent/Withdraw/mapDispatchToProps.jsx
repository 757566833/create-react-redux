// 在react组件中，前面为方法名，后面是预置的方法
import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setBalance: (balance) => dispatch(action.setBalance(balance)),

    };
};
export default mapDispatchToProps;