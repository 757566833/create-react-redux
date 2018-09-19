import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Header
            </div>
        );
    }
}
Header.propTypes = {
    defaultChild:PropTypes.object.isRequired,
    phoneNumber:PropTypes.string.isRequired,
    childrenList:PropTypes.array.isRequired,

};
const reduxHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
export default reduxHeader;