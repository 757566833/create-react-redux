import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from './control.jsx';
import { getFetch } from '../../../../fetch/fetch-Development.jsx';

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
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
                SearchHeader
            </div>
        );
    }
}
export default withRouter(SearchHeader);