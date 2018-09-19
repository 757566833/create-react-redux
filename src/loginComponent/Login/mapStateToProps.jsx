// 后面是整体库中的变量名， 前面对应在react组建中继承的变量名

const mapStateToProps=(state)=> {
    return {
        mobile: state.mobile,
        password: state.password,
        info: state.info,

    };
};

export default mapStateToProps;