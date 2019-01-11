import React from 'react';
import { withRouter } from 'react-router-dom';
import { getFetch } from '../../../../fetch/fetch-Development.jsx';
import Control from  './control';
export let headerRef;
class Header extends React.Component {
    constructor(props) {
        super(props);
        headerRef=this;
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    getUsername = () => {
        return getFetch(
            '/hello',
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
            <div style={{backgroundColor:'red'}}>
                <div>Header</div>
                <div>username:{this.props.username}</div>
                <div>mobile:{this.props.mobile}</div>
                <div><button onClick={()=>this.props.setUsername('header')}>设置username为header</button></div>
                <div><button onClick={()=>this.props.setMobile('789789')}>设置mobile为789789</button></div>
                <div><button onClick={()=> Control.getUsername()}>从服务器获取user并写入</button></div>
            </div>
        );
    }
}
export default withRouter(Header);
