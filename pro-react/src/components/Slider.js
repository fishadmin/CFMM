import React from 'react'

import '../assets/css/style.css';
import banner from '../assets/images/banner.jpg';
import banner1 from '../assets/images/banner1.jpg';

import ReactSwipe from 'react-swipe';

class Slider extends React.Component{
  render(){
    return (
      <div data-am-widget="slider" className="am-slider-default" data-am-slider='{}' >
			 
        <ReactSwipe className="am-slides" swipeOptions={{continuous: true, auto:1000}}>
        <div><img src={banner}/></div>
        <div><img src={banner1}/></div>
        </ReactSwipe>
		  </div>
      
      
     
      )
  }
}
export default Slider;