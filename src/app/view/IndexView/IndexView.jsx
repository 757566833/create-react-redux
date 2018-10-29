import React from 'react';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';
import './style.less';
// import Header from '../../components/Header/Header.jsx';
// import Menus from '../../components/Menus/Menus.jsx';
// import ArticleList from '../../components/ArticleList/ArticleList.jsx';
// const json={
//     info:{},
//     children:[{
//         info:{},
//     },{

//     }]
// };

class IndexView extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount=()=>{
        console.log('test');
    }
    render(){
        return(
            <div>
                <div className='test'>999</div>
            </div>
        );
    }
}
IndexView.propTypes = {
    defaultChild:PropTypes.object.isRequired,

};
const reduxIndexView = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexView);
export default reduxIndexView;