import React from 'react';
import Slider1 from './Slider1';
import List1 from './List1';
import pubsub from 'pubsub-js';
import {connect} from 'react-redux';

import {asyncAction} from '../store/asyncAction';

class Speak extends React.Component{
  constructor(props){
    super();
    let url=`/data/speak.data`;
    props.get(url);
  }
  // state={
  //   list:[],
  //   dataName:'speak'
  // };
  // componentDidMount(){

  //   pubsub.publish('bLoading',true);

  //     fetch(
  //       `/data/speak.data`
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
  let speakData= this.props.speakData;
  let get= this.props.get;
   return(
    <React.Fragment>
     <Slider1/>
     <List1 list={speakData} dataName="speak" />
    </React.Fragment>

   )
 }
}
const mapStateToProps=state=>({
  speakData:state.speakData,
});

const mapDispatchToProps=dispatch=>({
  get:(url)=>{asyncAction(url,dispatch,'UPDATE_SPEAK')}
});

export default connect(mapStateToProps,mapDispatchToProps)(Speak);
