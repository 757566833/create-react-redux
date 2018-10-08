import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';
import { Button } from 'antd';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                HomePage
                <Button type="primary">Primary</Button>
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