import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../redux/store.jsx';
import { Provider, connect } from 'react-redux';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { indexRouter } from '../../../config/routerConfig';
import IndexView from '../view/IndexView/IndexView.jsx';


class LoginRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={IndexView} />
                <Route path='/IndexView' component={IndexView} />

                <Route path='/**' component={IndexView} />
            </Switch>
        );
    }
}
const LoginRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRouter);
const Login = () => <Provider store={store}>
    <BrowserRouter basename={indexRouter}>
        <LoginRedux />
    </BrowserRouter>
</Provider>;
export default Login;
