import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setDefaultChild: (defaultChild) => dispatch(action.setDefaultChild(defaultChild)),
        setPhoneNumber: (phoneNumber) => dispatch(action.setPhoneNumber(phoneNumber)),
        setChildrenList: (childrenList) => dispatch(action.setChildrenList(childrenList)),

    };
};
export default mapDispatchToProps;