import React from 'react';
import Control from './control.jsx';
import { getFetch } from '../../../../fetch/fetch.jsx';

export default class Header extends React.Component {
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
                Header
            </div>
        );
    }
}
