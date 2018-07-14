import React from 'react'
import '../assets/css/reg.css'
import {Link} from 'react-router-dom'
class Reg extends React.Component{
  gogo(){
    this.props.history.go(-1);
  }
  render(){
    return (
      <div className="content">
        <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
        <h3></h3>
        <div className="login-box">
            <div className="login">
            <Link to="login">登录</Link>
            </div>
        </div>
        <ul>
            <li className="lifirst">
            <input type="text"  />
            <span>帐号</span>
            </li>
            <li>
            <input type="text" v-model="mima"/>
            <span>密码</span>
            </li>
        </ul>
        <div className="footbox">
                <input type="button" value="登 录" className="login-btn"/>
                <a href="javascript:;" className="tishi">忘记密码？</a>
            
        </div>
        </div>
    )
  }
}
export default Reg;