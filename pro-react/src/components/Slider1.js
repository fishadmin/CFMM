import React from 'react'
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';


// import './assets/css/style.css'
import ReactSwipe from 'react-swipe';

class Slider1 extends React.Component{
  render(){
    return (
      <div data-am-widget="slider m1" className="am-slider-default" data-am-slider='{}' >
			 <ReactSwipe className="am-slides" swipeOptions={{continuous: true, auto:1000}}>
        <div><img src={banner3}/></div>
        <div><img src={banner4}/></div>
        </ReactSwipe>
		  </div>
     
      )
  }
}
export default Slider1;