// 在react组件中，前面为方法名，后面是预置的方法
import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setDefaultChild: (defaultChild) => dispatch(action.setDefaultChild(defaultChild)),
        setPhoneNumber: (phoneNumber) => dispatch(action.setPhoneNumber(phoneNumber)),
        setChildrenList: (childrenList) => dispatch(action.setChildrenList(childrenList)),

    };
};
export default mapDispatchToProps;