import React from 'react';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';


class Income extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Income
            </div>
        );
    }
}
Income.propTypes = {

};
const reduxIncome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Income);
export default reduxIncome;