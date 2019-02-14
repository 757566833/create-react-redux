import React from 'react';

import ArticleList from '../../components/ArticleList/ArticleList.jsx';
export let AdminViewRef;
export default class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.isMount = true;
        AdminViewRef = this;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    render() {
        return (
            <div>
                <ArticleList />
            </div>
        );
    }
}
