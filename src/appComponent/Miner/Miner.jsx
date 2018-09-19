import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';


class Miner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Miner
            </div>
        );
    }
}
Miner.propTypes = {

};
const reduxMiner = connect(
    mapStateToProps,
    mapDispatchToProps
)(Miner);
export default reduxMiner;