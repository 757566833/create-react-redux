import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setChildrenList: (childrenList) => dispatch(action.setChildrenList(childrenList)),
        setBalance: (balance) => dispatch(action.setBalance(balance)),

    };
};
export default mapDispatchToProps;