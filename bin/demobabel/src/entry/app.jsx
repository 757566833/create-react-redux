import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../app/redux/store.jsx';
import { Provider } from 'react-redux';
import { indexRouter } from '../../config/routerConfig.jsx';
import IndexView from '../app/view/IndexView/IndexView.jsx';
import SearchView from '../app/view/SearchView/SearchView.jsx';
import AdminView from '../app/view/AdminView/AdminView.jsx';


//路由自己写，未必每个组件都是分页
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter  basename={indexRouter}>
            <Switch>
                <Route exact path='/' component={IndexView} />
                <Route path='/IndexView' component={IndexView} />
                <Route path='/SearchView' component={SearchView} />
                <Route path='/AdminView' component={AdminView} />
                <Route path='/**' component={IndexView} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));