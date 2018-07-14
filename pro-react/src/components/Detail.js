import React from 'react'
import '../assets/css/style.css';
import {Link} from 'react-router-dom'

 class Detail extends React.Component{
  render(){
    return(
      <div>
      <header data-am-widget="header"  className="am-header am-header-default header">
        <div className="am-header-left am-header-nav">
            <a  className="" onClick={()=>{this.props.history.go(-1)}}> 
              <i className="am-header-icon am-icon-angle-left"></i>
            </a>
          </div>
          <h2 className="am-header-title"> <a href=""  className="" >厨房妈妈</a></h2>
          <div  className="am-header-right am-header-nav">
            <a href="#right-link"  className=""> </a>
          </div>
        </header>
        <div  className="content">
            <h2>这几种果汁喝出美丽</h2>
            <div  className="text"><span  className="fl">2017-5-23</span><span  className="fr"><i  className="am-icon-thumbs-o-up"></i>&nbsp;浏览174</span></div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。</p>
            <p>  排毒排便－香蕉牛奶汁</p>
            <p>  适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！</p>
            <br />
            <br />
            <p>  止咳防晕－芒果汁</p>
            <p>  退火利尿－椰子汁</p>
            <p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p>
            <p>  水果之王－奇异果汁</p>
          </div>
        </div>
    )
  }
}
export default Detail;