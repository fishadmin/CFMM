import React from 'react';
import '../assets/css/style.css';
import nav from '../assets/images/nav.png';
import nav2 from '../assets/images/nav2.png';
import nav3 from '../assets/images/nav3.png';
import nav4 from '../assets/images/nav4.png';

import {Link} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return (
 
      <div data-am-widget="navbar" className="am-navbar am-cf am-navbar-default footer "  id="">
		      <ul className="am-navbar-nav am-cf am-avg-sm-4">
		          <li >
								<Link to="home">
		            {/* <a href="" className=""> */}
		                <span className=""><img src={nav}/></span>
		                <span className="am-navbar-label">点餐</span>
		            {/* </a> */}
								</Link>
                
		          </li>
		          <li>
								<Link to="speak">
		            {/* <a href="" className=""> */}
		                <span className=""><img src={nav2}/></span>
		                <span className="am-navbar-label">客说</span>
		            {/* </a> */}
                </Link>
		          </li>
		          <li>
								<Link to="we">	
								{/* <a href="" className=""> */}
		                <span className=""><img src={nav3}/></span>
		                <span className="am-navbar-label">我们</span>
		            {/* </a> */}
                </Link>
		          </li>
		          <li >
								<Link to="user">
								{/* <a href="" className=""> */}
		                <span className=""><img src={nav4}/></span>
		                <span className="am-navbar-label">我的</span>
		            {/* </a> */}
                </Link>
		          </li>
		   
		      </ul>
		</div>
    )
  }
}
export default Footer;