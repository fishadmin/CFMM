import React from 'react'
import '../assets/css/style.css'
import icon from '../assets/images/icon.jpg';
import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';

import {Link} from 'react-router-dom'

// class List extends React.Component {
  // render() {
  //   return (
    // <div>
		// 	<a href="#" className="search">
		// 		开启你的美食之旅...
		// 	</a>
		// 	<ul className="nav nav1">
		// 		<li>
		// 			<a href="#">
		// 				<img src={icon} />
		// 				<p>最新推荐</p>
		// 			</a>
		// 		</li>
		// 		<li>
		// 			<a href="#">
		// 				<img src={icon1} />
		// 				<p>热门菜谱</p>
		// 			</a>
		// 		</li>
		// 		<li>
		// 			<a href="#">
		// 				<img src={icon2} />
		// 				<p>人气菜肴</p>
		// 			</a>
		// 		</li>
		// 		<li>
		// 			<a href="#">
		// 				<img src={icon3} />
		// 				<p>优惠券</p>
		// 			</a>
		// 		</li>
		// 	</ul>
		// 	<div data-am-widget="titlebar" className="am-titlebar am-titlebar-default title" >
		// 			<h2 className="am-titlebar-title ">   积分菜品 </h2>
		// 			<nav className="am-titlebar-nav">
		// 					<a href="#more" className="">more &raquo;</a>
		// 			</nav>
		// 	</div>
    // </div>
//     )
//   }
// }

const List=({list,dataName})=>(
	<div>
			<a href="#" className="search">
				开启你的美食之旅...
			</a>
			<ul className="nav nav1">
				<li>
					<a href="#">
						<img src={icon} />
						<p>最新推荐</p>
					</a>
				</li>
				<li>
					<a href="#">
						<img src={icon1} />
						<p>热门菜谱</p>
					</a>
				</li>
				<li>
					<a href="#">
						<img src={icon2} />
						<p>人气菜肴</p>
					</a>
				</li>
				<li>
					<a href="#">
						<img src={icon3} />
						<p>优惠券</p>
					</a>
				</li>
			</ul>
			<div data-am-widget="titlebar" className="am-titlebar am-titlebar-default title" >
					<h2 className="am-titlebar-title ">   积分菜品 </h2>
					<nav className="am-titlebar-nav">
							<a href="#more" className="">more &raquo;</a>
					</nav>
			</div>
	<ul data-am-widget="gallery" className="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
		{
			list.map((item,index)=>{
				return(
					<li key={item.id}>
							<div className="am-gallery-item">
		            <a href="" className="">
		              <img src={item.img}  alt=""/>
		              <h3 className="am-gallery-title">{item.title}</h3>
		              <div className="am-gallery-desc">
		              	<em>{item.price}</em><i className="am-icon-cart-plus"></i>
		              </div>
		            </a>
		        </div>
					</li>
				)
			})
		     
		}
	</ul>
	</div>

)
export default List;