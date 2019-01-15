import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../login/redux/store.jsx';
import { Provider } from 'react-redux';
import { loginRouter } from '../../config/routerConfig.jsx';
import IndexView from '../login/view/IndexView/IndexView.jsx';


//路由自己写，未必每个组件都是分页
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter  basename={loginRouter}>
            <Switch>
                <Route exact path='/' component={IndexView} />
                <Route path='/IndexView' component={IndexView} />
                <Route path='/**' component={IndexView} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
    