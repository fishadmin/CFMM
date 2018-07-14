import * as React from "react";
import {connect} from 'react-redux';
class Buycar extends React.Component{
  render(){
    let {buyCar,removeItem,clearBuyCar}=this.props;
    return (
      <div className="buycar">
        <ul>
          {
            buyCar.map((item,index)=>{
              return <li key={item.id}>
                {item.id}|{item.title}|{item.number}
                <button onClick={removeItem.bind(null,item)}>删除</button>
              </li>
            })
          }
        </ul>
        {buyCar.length?<button onClick={clearBuyCar}>清空购物车</button>:null}
      </div>
    )
  }
}


//获取store
const mapStateToProps = (state, ownProps) => {
  return {
    buyCar:state.buyCar
  }
};

//转发actins
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    removeItem: (item) => {
      // console.log('buycar37',item);
      dispatch({
        type: 'REMOVE_ITEM',
        payload:item
      });
    },
    clearBuyCar: () => {
      dispatch({
        type: 'REMOVE_ALL'
      });
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buycar);