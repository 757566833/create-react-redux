import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setBalance: (balance) => dispatch(action.setBalance(balance)),

    };
};
export default mapDispatchToProps;