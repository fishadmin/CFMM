import React from 'react'
import '../assets/css/style.css';

import ms from '../assets/images/ms.jpg';
import cy from '../assets/images/cy.jpg';
import mmp from '../assets/images/mmp.jpg';
import ys from '../assets/images/ys.jpg';
import p from '../assets/images/p.png';
import {Link} from 'react-router-dom'

const List1=({list,dataName})=>(
	<div>
        <ul  className="nav nav2">
			<li>
				<a href="#">
					<img src={ms} />
					<p>美食快拍</p>
				</a>
			</li>
			<li>
				<a href="#">
					<img src={cy} />
					<p>厨艺交流</p>
				</a>
			</li>
			<li>
				<a href="#">
					<img src={mmp} />
					<p>妈妈派</p>
				</a>
			</li>
			<li>
				<a href="#">
					<img src={ys} />
					<p>饮食健康</p>
				</a>
			</li>
		</ul>
    <div data-am-widget="intro"  className="am-intro am-cf am-intro-default">
		    <div  className="am-intro-hd">
		        <h2  className="am-intro-title">功效</h2>
		    </div>
			{
			list.map((item,index)=>{
			return(
		    <div className="am-g am-intro-bd" key={item.id}>
				{/* <a href="content.html"> */}
				<Link to="detail">
			        <div  className="am-intro-left am-u-sm-3"><img src={p} /></div>
			        <div  className="am-intro-right am-u-sm-9">
			        	<h2>{item.title}</h2>
			        	<p>{item.con}</p>
			        	<div  className="text">
			        		<span  className="fl">{item.time}</span>
			        		<span  className="fr"><i  className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
			        	</div>
			        </div>
			   {/* </a> */}
			   </Link>
			   </div>
				)
				})
			}

		  </div>
		  <div  className="h50"></div>
    </div>
    )

export default List1;