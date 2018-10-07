import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';
import './HomePage.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    test=()=>{
        this.props.setDefaultChild({userName:'dsadsa'});
    }
    render() {
        return (
            <div className='HomePage'>
                HomePage111
                <button onClick={this.test}>test</button>
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