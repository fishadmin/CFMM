import React from 'react'
import ReactSwipe from 'react-swipe';

 class Pro extends React.Component{
  render(){
    return (
        <div>
        <div  className="am-tabs qiehuan nav2 am-tabs-bd" data-am-tabs>
			  <ul  className="am-tabs-nav am-nav am-nav-tabs">
			    <li  className="am-active"><a href="#">店铺介绍</a>
						<div  className="am-active">
			                  妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。
			    	</div>
					</li>
			    <li  className="am-tabs-nav am-nav am-nav-tabs"><a href="#">建议留言</a>
							<div  className="am-tab-panel  am-in am-active">
			          <input type="text" placeholder="姓名"  className="tab-input" />
			          <input type="text" placeholder="电话"  className="tab-input" />
			          <textarea placeholder="建议"  className="tab-input"></textarea>
			          <button type="button"  className="tab-btn">提交</button>
			    	</div>
					</li>
			  </ul>
		
		</div>
    </div>
     
      )
  }
}
export default Pro;