import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../redux/store.jsx';
import { Provider, connect } from 'react-redux';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
// import { connect } from 'react-redux';
import { loginRouter } from '../../../config/routerConfig';
import IndexView from '../view/IndexView/IndexView.jsx';

const LoginRouter = () =>
    <Switch>
        <Route exact path='/' component={IndexView} />
        <Route path='/IndexView' component={IndexView} />
        <Route path='/**' component={IndexView} />
    </Switch>;
const LoginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRouter);
const Login = () => <Provider store={store}>
    <BrowserRouter basename={loginRouter}>
        <LoginRedux />
    </BrowserRouter>
</Provider>;
export default Login;
//路由自己写，未必每个组件都是分页
