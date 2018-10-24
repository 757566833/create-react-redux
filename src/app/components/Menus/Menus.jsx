import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';
import Control from './control.jsx';
import { getFetch } from '../../../../fetch/fetch-Development.jsx';

class Menus extends React.Component {
    constructor(props) {
        super(props);
    }
    helloStart = () => {
        Control.helloControlStart(this);
    }
    test = () => {
        return getFetch(
            '/hello',
            ''
        );
    }
    componentGetResult = (data) => {
        console.log(data);
    }
    wordStart=()=>{
        Control.word(this);
    }
    word = () => {
        console.log('word');
    }
    wordtwo = () => {
        console.log('wordtwo');
    }
    render() {
        return (
            <div>
                Menus
            </div>
        );
    }
}
Menus.propTypes = {
    test:PropTypes.string.isRequired,

};
const reduxMenus = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menus);
export default reduxMenus;