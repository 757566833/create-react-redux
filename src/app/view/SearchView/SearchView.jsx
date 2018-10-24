import React from 'react';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';
// import SearchHeader from '../../components/SearchHeader/SearchHeader.jsx';
// import ArticleList from '../../components/ArticleList/ArticleList.jsx';

class SearchView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                SearchView
            </div>
        );
    }
}
SearchView.propTypes = {

};
const reduxSearchView = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchView);
export default reduxSearchView;