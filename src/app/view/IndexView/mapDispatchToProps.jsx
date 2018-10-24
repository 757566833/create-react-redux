import action from './action.jsx';

const mapDispatchToProps=(dispatch)=> {
    return {
        setDefaultChild: (defaultChild) => dispatch(action.setDefaultChild(defaultChild)),

    };
};
export default mapDispatchToProps;