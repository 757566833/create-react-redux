import React from 'react';

import ArticleList from '../../components/ArticleList/ArticleList.jsx';

export default class AdminView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ArticleList/>
            </div>
        );
    }
}
