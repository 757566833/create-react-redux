import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './redux/store.jsx';
import { Provider } from 'react-redux';
import { indexRouter } from '../../config/routerConfig.jsx';
import IndexView from './view/IndexView.jsx';
import SearchView from './view/SearchView.jsx';
import AdminView from './view/AdminView.jsx';

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
            
            <Route path={ indexRouter } component={App}>
                <IndexRoute component={IndexView} />
                <Route path={'IndexView'} component={IndexView} />
                <Route path={'SearchView'} component={SearchView} />
                <Route path={'AdminView'} component={AdminView} />

                <Route path={'**'} component={IndexView} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));