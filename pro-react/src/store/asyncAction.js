export const asyncAction=(url,dispatch,type)=>{
  dispatch({type:'VIEW_LOADING',payload:true});
  setTimeout(()=>{
    fetch(
      url
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:'VIEW_LOADING',payload:false});
        dispatch({type:type,payload:data})
      }
    )
  },1000)

};

export const asyncAction2=(url,dispatch,type,history)=>{
  dispatch({type:'VIEW_LOADING',payload:true});
  setTimeout(()=>{
    fetch(
      url
    ).then(
      res=>res.json()
    ).then(
      data=>{
        dispatch({type:'VIEW_LOADING',payload:false});
        dispatch({type:type,payload:data});
        history.replace({pathname:'/user'});// push replace 路由监听，拿不到跳转后的链接
        dispatch({type:'VIEW_FOOT',payload:true});
        dispatch({type:'VIEW_NAV',payload:false});
      }
    )
  },1000)

};
