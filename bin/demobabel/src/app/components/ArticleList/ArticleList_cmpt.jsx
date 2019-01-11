import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from './control.jsx';
import { getFetch } from '../../../../fetch/fetch-Development.jsx';
export let articleListRef;
class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        articleListRef = this;
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    getMobile = () => {
        return getFetch(
            '/networkError',
            ''
        );
    }
    setMobile = (mobile) => {
        this.props.setMobile(mobile);
    }
    interfaceError = (msg) => {
        alert(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        alert(`网络错误${code}`);
    }
    render() {
        return (
            <div style={{ backgroundColor: 'green' }}>
                <div>ArticleList</div>
                {/* 在配置中这里没有username属性，所以页面会是空的 */}
                <div>username:{this.props.username}</div>
                <div>mobile:{this.props.mobile}</div>
                <div><button onClick={() => this.props.setMobile('987654321')}>设置mobile为987654321</button></div>
                <div><button onClick={() => Control.getMobile('987654321')}>获取接口时网络错误</button></div>
            </div>
        );
    }
}
export default withRouter(ArticleList);
