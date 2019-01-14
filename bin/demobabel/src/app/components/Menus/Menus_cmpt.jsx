import React from 'react';
import Control from './control.jsx';
import { withRouter } from 'react-router-dom';
import { getFetch } from '../../../../fetch/fetch-Development.jsx';
export let menusRef;
class Menus extends React.Component {
    constructor(props) {
        super(props);
        menusRef=this;
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    getUsername = () => {
        return getFetch(
            '/interfaceError',
            ''
        );
    }
    setUsername=(username)=>{
        this.props.setUsername(username);
    }
    interfaceError=(msg)=>{
        alert(`接口错误，错误信息${msg}`);
    }
    networkError=(code)=>{
        alert(`网络错误${code}`);
    }
    render() {
        return (
            <div style={{backgroundColor:'green'}}>
                <div>Menus</div>
                <div>username:{this.props.username}</div>
                {/* 在配置中这里没有mobile属性，所以页面会是空的 */}
                <div>mobile:{this.props.mobile}</div>
                <div><button onClick={() => this.props.setUsername('menus')}>设置username为menus</button></div>
                <div><button onClick={() => Control.getUsername()}>获取接口错误的信息</button></div>
            </div>
        );
    }
}
export default withRouter(Menus);