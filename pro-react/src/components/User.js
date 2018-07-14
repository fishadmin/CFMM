import React from "react";
import '../assets/css/style.css'
import {Link} from 'react-router-dom'
import tx from '../assets/images/default_photo.png';

class User extends React.Component{
    render(){
        return(
            <div className="member">
              <div>
                <div className="member-pic">
                    <img src={tx} />
                </div>
                <div className="member-infor">157****8547</div>
                <Link to="login"><span className="reg">注销</span></Link>
              </div>
                <ul className="member-nav">
                    <li><a href="#"><i className="am-icon-map-marker"></i><span>收货地址</span></a></li>
                    <li><a href=""><i className="am-icon-newspaper-o"></i><span>我的订单</span></a></li>
                    <li><a href=""><i className="am-icon-cart-arrow-down"></i><span>购物车</span></a></li>
                    <li><a href=""><i className="am-icon-bell-o"></i><span>系统通知</span></a></li>
                    <li><a href=""><i className="am-icon-credit-card"></i><span>会员卡</span></a></li>
                    <li><a href=""><i className="am-icon-cc-mastercard"></i><span>优惠券</span></a></li>
                    <li><a href=""><i className="am-icon-dollar"></i><span>积分</span></a></li>
                </ul>
            </div>
        )
    }
}

export default User;