import React,{Component} from 'react';
import Footer from "./Footer";
import {Route,Redirect,Switch} from 'react-router-dom';
import pubsub from 'pubsub-js';


// import '../assets/css/style.css';
import Home from "./Home";
import Speak from "./Speak";
import We from "./We";
import User from "./User";
import Login from "./Login";
import Reg from "./Reg";
import Detail from "./Detail";
import Error from "./Error";
import Loading from "./Loading";
import {AuthUser} from "../guard/AuthUser";

import {connect} from 'react-redux';
import Buycar from './Buycar';

class App extends React.Component{

  componentDidMount(){
    this.routerView(this.props.location.pathname)
  }
  componentWillUpdate(){
    this.routerView(this.props.location.pathname)
  }
  routerView(path){
    let {bFoot,bLoading,viewFoot} = this.props;
    console.log(path);
    //修改导航状态
    if (/home|speak|we|user/.test(path)){
     viewFoot(true);
      /*setTimeout(()=>{
        viewNav(true);viewFoot(true);
      },0)*/
    }
    if (/login|reg|detail/.test(path)){
      viewFoot(false);
      /*setTimeout(viewNav, 0,false);
      setTimeout(viewFoot, 0,false);*/
    }
    if (/user/.test(path)){
      // console.log('usr.......')
       viewFoot(true);
      // setTimeout(viewNav, 0,false);
      // setTimeout(viewFoot, 0,true);
    }
  }

  // constructor(){
  //   super();

  //   this.state={
  //     bLoading:false,
  //     bFoot:true
  //   };

  //   pubsub.subscribe('bLoading',(mess,data)=>{
  //     this.setState({
  //       bLoading:data
  //     })
  //   })

  // }
  render(){

    // let path = this.props.location.pathname;
    // let bFoot=true
    // if (/home|speak|we|user/.test(path)){
    //    bFoot = true;
    // }
    // if (/login|reg|detail/.test(path)){
    //    bFoot = false;
    // }
    // if (/user/.test(path)){
    //    bFoot = true;
    // }

    return (
      <React.Fragment>
        {this.props.bLoading && <Loading />}
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/speak" component={Speak}/>
          <Route path="/we" component={We}/>
          <Route path="/user" component={User}/>
          <Route path="/buycar" component={Buycar}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail" component={Detail}/>
          <Redirect exact from="/" to="/home" />
          <Route component={Error}/>
        </Switch>

        {this.props.bFoot? <Footer/> : null}

      </React.Fragment>
    )
  }
}
const mapStateToProps=state=>({
  // bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading
});
const mapDispatchToProps=dispatch=>({
  // viewNav:(bl)=>{
  //   dispatch({type:'VIEW_NAV',payload:bl})
  // },
  viewFoot:(bl)=>{
    dispatch({type:'VIEW_FOOT',payload:bl})
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
