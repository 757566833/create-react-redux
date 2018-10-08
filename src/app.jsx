import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './appRedux/store.jsx';
import { Provider } from 'react-redux';
import Header from './appComponent/Header/Header.jsx';
import HomePage from './appComponent/HomePage/HomePage.jsx';
import Income from './appComponent/Income/Income.jsx';
import Miner from './appComponent/Miner/Miner.jsx';
import Setting from './appComponent/Setting/Setting.jsx';
import Withdraw from './appComponent/Withdraw/Withdraw.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
//路由自己写，未必每个组件都是分页
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={HomePage} />
                <Route path={'index'} component={HomePage} />
                <Route path={'**'} component={HomePage} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));