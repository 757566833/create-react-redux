import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';


class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}
Login.propTypes = {
    mobile:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    info:PropTypes.string.isRequired,

};
const reduxLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
export default reduxLogin;