import React from 'react'
import '../assets/css/login.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {asyncAction2} from "../store/asyncAction";

class Login extends React.Component{
  constructor(){
    super();
    this.state={yhm:"",mima:""}
    console.log(this.state);
    }
    userChang(event){
      this.setState({yhm:event.target.value});
      // this.yhm=this.state.value;
    }
    pwdChang(event){
      this.setState({mima:event.target.value});
      // this.mima=this.state.value;
    }
    login(event){
      if(this.yhm!=""||this.mima!=""){
        let yhm=this.yhm;
        this.$http({
        url:'http://localhost:8000/login',
        params:{yhm:yhm},
        method:'get',
        // withCredentials:true,//跨域凭证
      }).then((res)=>{
        if(res.data.length>0){
                  this.$store.dispatch("userData",res.data)
        this.$router.push('/user')
        }else{
          alert("用户名或密码错误")
        };
      }).catch((res)=>{
        // console.log(res)
      })
        }else{
          alert("请输入正确的账号和密码")
        }
      }
  gogo(){
    this.props.history.go(-1);
  }
  // componentDidMount(){
    
  // }
  render(){
    
    return (
      <div className="content">
      <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
      <h1></h1>
      <div className="login-box">
          <div className="login">
          <Link to={{pathname:'/reg'}}>注册</Link>
          </div>
      </div>
      <ul>
          <li className="lifirst">
          <input type="text" yhm={this.state.value} onChange={this.userChang.bind(this)}/>
          <span>帐号</span>
          </li>
          <li>
          <input type="text" mima={this.state.value} onChange={this.pwdChang.bind(this)}/>
          <span>密码</span>
          </li>
      </ul>
      <div className="footbox">
              <input type="button" value="登 录" className="login-btn" onClick={()=>{
            this.props.login(this.props.history)}}/>
              <a href="javascript:;" className="tishi">忘记密码？</a>
          
      </div>
      </div>
    )
  }
}
const mapStateToProps=state=>({});
const mapDispatchToProps=dispatch=>({
  login:(history)=>{
    // dispatch({type:'UPDATE_USER',payload:{xxx:'双向绑定数据'}})
    asyncAction2('/data/user.json',dispatch,'UPDATE_USER',history)
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);

    