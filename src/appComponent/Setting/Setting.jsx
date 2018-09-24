import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';


class Setting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Setting
            </div>
        );
    }
}
Setting.propTypes = {
    childrenList:PropTypes.array.isRequired,
    balance:PropTypes.object.isRequired,
    setChildrenList:PropTypes.func.isRequired,
    setBalance:PropTypes.func.isRequired,

};
const reduxSetting = connect(
    mapStateToProps,
    mapDispatchToProps
)(Setting);
export default reduxSetting;