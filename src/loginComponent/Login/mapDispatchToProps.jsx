import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setMobile: (mobile) => dispatch(action.setMobile(mobile)),
        setPassword: (password) => dispatch(action.setPassword(password)),
        setInfo: (info) => dispatch(action.setInfo(info)),

    };
};
export default mapDispatchToProps;