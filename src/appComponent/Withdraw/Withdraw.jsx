import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';


class Withdraw extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Withdraw
            </div>
        );
    }
}
Withdraw.propTypes = {
    balance:PropTypes.object.isRequired,

};
const reduxWithdraw = connect(
    mapStateToProps,
    mapDispatchToProps
)(Withdraw);
export default reduxWithdraw;