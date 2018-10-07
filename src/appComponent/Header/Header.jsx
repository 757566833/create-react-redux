import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';
import './Header.less';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Header'>
                Header
                {this.props.defaultChild.userName}
            </div>
        );
    }
}
Header.propTypes = {
    defaultChild:PropTypes.object.isRequired,
    phoneNumber:PropTypes.string.isRequired,
    childrenList:PropTypes.array.isRequired,
    setDefaultChild:PropTypes.func.isRequired,
    setPhoneNumber:PropTypes.func.isRequired,
    setChildrenList:PropTypes.func.isRequired,

};
const reduxHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
export default reduxHeader;