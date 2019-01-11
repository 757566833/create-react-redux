import React from 'react';

import Header from '../../components/Header/Header.jsx';
import Menus from '../../components/Menus/Menus.jsx';
import ArticleList from '../../components/ArticleList/ArticleList.jsx';

export default class IndexView extends React.Component{
    constructor(props){
        super(props);
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    render(){
        return(
            <div>
                <Header/>
                <Menus/>
                <ArticleList/>
            </div>
        );
    }
}
