import React from 'react';
import Slider from './Slider';
import List from './List';
import pubsub from 'pubsub-js'; 
// import '../assets/css/style.css';
import {connect} from 'react-redux';
import {asyncAction} from '../store/asyncAction';

class Home extends React.Component{
  constructor(props){
    super();
    let url=`/data/index.data`;
    props.get(url);
  }
  // state={
  //   list:[],
  //   dataName:'home'
  // };
  // componentDidMount(){

  //   pubsub.publish('bLoading',true);

  //     fetch(
  //       `/data/index.data`
  //     ).then(
  //       res=>res.json()
  //     ).then(
  //       data=>{
  //         pubsub.publish('bLoading',false);
  //         this.setState({list:data})
  //       }
  //     )

  // }
 render(){
  let homeData= this.props.homeData;
  let get= this.props.get;
   return(
    <React.Fragment>
     <Slider/>
     <List list={homeData} dataName="home"  />
    </React.Fragment>

   )
 }
}
const mapStateToProps=state=>({
  homeData:state.homeData,
});

const mapDispatchToProps=dispatch=>({
  get:(url)=>{asyncAction(url,dispatch,'UPDATE_HOME')}
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
