import React from 'react';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

class AdminView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                AdminView
            </div>
        );
    }
}
AdminView.propTypes = {

};
const reduxAdminView = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminView);
export default reduxAdminView;