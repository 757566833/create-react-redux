import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                HomePage
            </div>
        );
    }
}
HomePage.propTypes = {
    defaultChild:PropTypes.object.isRequired,
    setDefaultChild:PropTypes.func.isRequired,

};
const reduxHomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
export default reduxHomePage;