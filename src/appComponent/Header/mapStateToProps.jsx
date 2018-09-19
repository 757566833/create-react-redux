// 后面是整体库中的变量名， 前面对应在react组建中继承的变量名

const mapStateToProps=(state)=> {
    return {
        defaultChild: state.defaultChild,
        phoneNumber: state.phoneNumber,
        childrenList: state.childrenList,

    };
};

export default mapStateToProps;