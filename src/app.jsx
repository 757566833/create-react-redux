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
                <Header/>
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
            {/* <Route path={indexRouter} component={App}> */}
                <IndexRoute component={HomePage} />
                <Route path={'HomePage'} component={HomePage} />
                <Route path={'Income'} component={Income} />
                <Route path={'Miner'} component={Miner} />
                <Route path={'Setting'} component={Setting} />
                <Route path={'Withdraw'} component={Withdraw} />
                <Route path={'**'} component={HomePage} />
            {/* </Route> */}
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));