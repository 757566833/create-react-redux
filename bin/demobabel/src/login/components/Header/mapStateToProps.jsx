
const mapStateToProps=(state)=> {
    return {
        username: state.username,
        password: state.password,

    };
};

export default mapStateToProps;