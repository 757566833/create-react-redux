// 在react组件中，前面为方法名，后面是预置的方法
import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setMobile: (mobile) => dispatch(action.setMobile(mobile)),
        setPassword: (password) => dispatch(action.setPassword(password)),
        setInfo: (info) => dispatch(action.setInfo(info)),

    };
};
export default mapDispatchToProps;