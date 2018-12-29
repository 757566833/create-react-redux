import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from '../login/redux/store.jsx';
import { Provider } from 'react-redux';
import { loginRouter } from '../../config/routerConfig.jsx';
import IndexView from '../login/view/IndexView/IndexView.jsx';

class Login extends React.Component {
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
            
            <Route path={ loginRouter } component={Login}>
                <IndexRoute component={IndexView} />
                <Route path={'IndexView'} component={IndexView} />

                <Route path={'**'} component={IndexView} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));