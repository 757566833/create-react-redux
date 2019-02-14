import React from 'react';

import SearchHeader from '../../components/SearchHeader/SearchHeader.jsx';
import ArticleList from '../../components/ArticleList/ArticleList.jsx';
export let SearchViewRef;
export default class SearchView extends React.Component {
    constructor(props) {
        super(props);
        this.isMount = true;
        SearchViewRef = this;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    render() {
        return (
            <div>
                <SearchHeader />
                <ArticleList />
            </div>
        );
    }
}
