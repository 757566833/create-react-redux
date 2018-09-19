import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './loginRedux/store.jsx';
import { Provider } from 'react-redux';
import Login from './loginComponent/Login/Login.jsx';
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
            {/* <Route path={indexRouter} component={App}>
                <IndexRoute component={HomePage} />
                <Route path={'index'} component={HomePage} />
                <Route path={'**'} component={HomePage} />
            </Route> */}
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));